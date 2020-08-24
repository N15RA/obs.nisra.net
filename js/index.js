function saveToFile(filename, text)
{
    blob = new Blob([text], { type: 'text/plain;charset=utf-8' }),
    anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
    anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
    anchor.click();
}

// getMainBG("title", "speaker")
const DefaultMainBGURL = "https://nisra.exps.pw/"
function getMainBG(title, speaker, bgColor)
{
	return `${DefaultMainBGURL}?title=${encodeURI(title)}&speaker=${encodeURI(speaker)}&bg=${bgColor}`
}

// getCommentURL("http://z.fjucpc.tk:8080/messages", "slido", "youtube")
const DefaultCommentUrl = "http://comment.nisra.net"
function getCommentURL(url, slido, youtube)
{
	urls = `${DefaultCommentUrl}/`;
	let cnt = 0;
	urls += `?url=${url}`
	if(slido)
	{
		urls += `&slido=${slido}`
		cnt++;
	}
	if(youtube)
	{
		urls += `&youtube=${youtube}`
		cnt++;
	}
	return urls
}

// getTextURL("text")
const DefaultTextUrl = "https://nisra.exps.pw/word.html?word="
function getTextURL(text)
{
	text = encodeURI(text);
	return `${DefaultTextUrl}${text}`
}

function generateSettingFile(commentURL, commentCSS, commentSlido, commentYoutube,
	title, speaker, offText, byeText,
	bgColor)
{
	// off text
	setting["sources"][1]["settings"]["url"] = getTextURL(offText);
	// bye text
	setting["sources"][8]["settings"]["url"] = getTextURL(byeText);
	// main bg
	setting["sources"][3]["settings"]["url"] = getMainBG(title, speaker, bgColor)
	// comment
	setting["sources"][6]["settings"]["url"] = getCommentURL(commentURL, commentSlido, commentYoutube);
	setting["sources"][6]["settings"]["css"] = commentCSS;
	// console.log(setting)
	saveToFile("obs.json", JSON.stringify(setting));
}

function getDefaultCommentCSS()
{
	return `body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0px auto;
  overflow: hidden;
  font-size: 20px;
}`;
}

$(document).ready(function() {
	$("#cssFormControlTextarea").html(getDefaultCommentCSS());

	$("#obsForm").submit(function(event) {
	  	event.preventDefault();
		// Comment
		commentURL = $("#commentURLInput").val();
		commentSlido = $("#SlidoInput").val();
		commentYoutube = $("#YoutubeInput").val();
		// Main bg
		title = $("#titleInput").val() || "請修改標題";
		speaker = $("#speakerInput").val() || "請修改講者名稱";
		// Off
		offText = $("#OffInput").val() || "請修改 Off text";
		// Bye
		byeText = $("#ByeInput").val() || "請修改 Bye text";
		// background color
		bg = $("input[name=bg]:checked").val();
		// not defalut
		if($("#cssFormControlTextarea").val() == getDefaultCommentCSS())
		{
			if(bg == "white")
				commentCSS = $("#cssFormControlTextarea").val().replace(/\n/g, ' ').replace(/}/g, 'color: black; }');
			else if(bg == "black")
				commentCSS = $("#cssFormControlTextarea").val().replace(/\n/g, ' ').replace(/}/g, 'color: white; }');
		}

		generateSettingFile(commentURL, commentCSS, commentSlido, commentYoutube, title, speaker, offText, byeText, bg);
	});
});