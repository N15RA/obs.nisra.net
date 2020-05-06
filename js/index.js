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
const DefaultMainBGURL = "https://mango.exps.pw/NISRA/index.html"
function getMainBG(title, speaker)
{
	return `${DefaultMainBGURL}?title=${encodeURI(title)}&speaker=${encodeURI(speaker)}`
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
const DefaultTextUrl = "https://mango.exps.pw/NISRA/word.html?word="
function getTextURL(text)
{
	text = encodeURI(text);
	return `${DefaultTextUrl}${text}`
}

function generateSettingFile(commentURL, commentCSS, commentSlido, commentYoutube,
	title, speaker, offText, byeText)
{
	// off text 
	setting["sources"][1]["settings"]["url"] = getTextURL(offText);
	// bye text
	setting["sources"][8]["settings"]["url"] = getTextURL(byeText);
	// main bg
	setting["sources"][3]["settings"]["url"] = getMainBG(title, speaker)
	// comment
	setting["sources"][6]["settings"]["url"] = getCommentURL(commentURL, commentSlido, commentYoutube);
	setting["sources"][6]["settings"]["css"] = commentCSS;
	// console.log(setting)
	saveToFile("obs.json", JSON.stringify(setting));
}

$(document).ready(function() {
	$("#cssFormControlTextarea").html(
`body { 
  background-color: rgba(0, 0, 0, 0);
  margin: 0px auto;
  overflow: hidden;
  font-size: 20px;
}`);
	$("#obsForm").submit(function(event) {
	  	event.preventDefault();
		// Comment
		commentURL = $("#commentURLInput").val();
		commentCSS = $("#cssFormControlTextarea").val().replace(/\n/g, ' ');
		commentSlido = $("#SlidoInput").val();
		commentYoutube = $("#YoutubeInput").val();
		// Main bg
		title = $("#titleInput").val() || "請修改標題";
		speaker = $("#speakerInput").val() || "請修改講者名稱";
		// Off
		offText = $("#OffInput").val() || "請修改 Off text";
		// Bye
		byeText = $("#ByeInput").val() || "請修改 Bye text";

		generateSettingFile(commentURL, commentCSS, commentSlido, commentYoutube, title, speaker, offText, byeText);
	});
});