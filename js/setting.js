setting = {
    "AuxAudioDevice1": {
        "balance": 0.5,
        "deinterlace_field_order": 0,
        "deinterlace_mode": 0,
        "enabled": true,
        "flags": 0,
        "hotkeys": {
            "libobs.mute": [],
            "libobs.push-to-mute": [],
            "libobs.push-to-talk": [],
            "libobs.unmute": []
        },
        "id": "wasapi_input_capture",
        "mixers": 255,
        "monitoring_type": 0,
        "muted": false,
        "name": "麥克風/輸入音效 1",
        "prev_ver": 419430408,
        "private_settings": {},
        "push-to-mute": false,
        "push-to-mute-delay": 0,
        "push-to-talk": false,
        "push-to-talk-delay": 0,
        "settings": {
            "device_id": "default"
        },
        "sync": 0,
        "versioned_id": "wasapi_input_capture",
        "volume": 1.0
    },
    "DesktopAudioDevice1": {
        "balance": 0.5,
        "deinterlace_field_order": 0,
        "deinterlace_mode": 0,
        "enabled": true,
        "flags": 0,
        "hotkeys": {
            "libobs.mute": [],
            "libobs.push-to-mute": [],
            "libobs.push-to-talk": [],
            "libobs.unmute": []
        },
        "id": "wasapi_output_capture",
        "mixers": 255,
        "monitoring_type": 0,
        "muted": false,
        "name": "輸出音效 1",
        "prev_ver": 419430408,
        "private_settings": {},
        "push-to-mute": false,
        "push-to-mute-delay": 0,
        "push-to-talk": false,
        "push-to-talk-delay": 0,
        "settings": {
            "device_id": "default"
        },
        "sync": 0,
        "versioned_id": "wasapi_output_capture",
        "volume": 1.0
    },
    "current_program_scene": "On",
    "current_scene": "On",
    "current_transition": "淡入淡出",
    "groups": [],
    "modules": {
        "auto-scene-switcher": {
            "active": false,
            "interval": 300,
            "non_matching_scene": "",
            "switch_if_not_matching": false,
            "switches": []
        },
        "captions": {
            "enabled": false,
            "lang_id": 1028,
            "provider": "mssapi",
            "source": ""
        },
        "output-timer": {
            "autoStartRecordTimer": false,
            "autoStartStreamTimer": false,
            "pauseRecordTimer": true,
            "recordTimerHours": 0,
            "recordTimerMinutes": 0,
            "recordTimerSeconds": 30,
            "streamTimerHours": 0,
            "streamTimerMinutes": 0,
            "streamTimerSeconds": 30
        },
        "scripts-tool": []
    },
    "name": "NISRA_2023-11-14",
    "preview_locked": false,
    "quick_transitions": [
        {
            "duration": 300,
            "fade_to_black": false,
            "hotkeys": [],
            "id": 1,
            "name": "直接轉場"
        },
        {
            "duration": 300,
            "fade_to_black": false,
            "hotkeys": [],
            "id": 2,
            "name": "淡入淡出"
        },
        {
            "duration": 300,
            "fade_to_black": true,
            "hotkeys": [],
            "id": 3,
            "name": "淡入淡出"
        }
    ],
    "saved_projectors": [],
    "scaling_enabled": false,
    "scaling_level": 0,
    "scaling_off_x": 0.0,
    "scaling_off_y": 0.0,
    "scene_order": [
        {
            "name": "Off"
        },
        {
            "name": "On"
        },
        {
            "name": "Bye"
        }
    ],
    "sources": [
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "OBSBasic.SelectScene": [],
                "libobs.hide_scene_item.Offb": [],
                "libobs.show_scene_item.Offb": []
            },
            "id": "scene",
            "mixers": 0,
            "monitoring_type": 0,
            "muted": false,
            "name": "Off",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "custom_size": false,
                "id_counter": 1,
                "items": [
                    {
                        "align": 5,
                        "bounds": {
                            "x": 0.0,
                            "y": 0.0
                        },
                        "bounds_align": 0,
                        "bounds_type": 0,
                        "crop_bottom": 0,
                        "crop_left": 0,
                        "crop_right": 0,
                        "crop_top": 0,
                        "group_item_backup": false,
                        "id": 1,
                        "locked": true,
                        "name": "Offb",
                        "pos": {
                            "x": 0.0,
                            "y": 0.0
                        },
                        "private_settings": {},
                        "rot": 0.0,
                        "scale": {
                            "x": 1.0,
                            "y": 1.0
                        },
                        "scale_filter": "disable",
                        "visible": true
                    }
                ]
            },
            "sync": 0,
            "versioned_id": "scene",
            "volume": 1.0
        },
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "libobs.mute": [],
                "libobs.push-to-mute": [],
                "libobs.push-to-talk": [],
                "libobs.unmute": []
            },
            "id": "browser_source",
            "mixers": 255,
            "monitoring_type": 0,
            "muted": false,
            "name": "Offb",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "height": 1080,
                "url": "https://mango.exps.pw/NISRA/word.html?word=Rev%200x1%20%E9%A0%90%E6%BC%94",
                "width": 1920
            },
            "sync": 0,
            "versioned_id": "browser_source",
            "volume": 1.0
        },
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "OBSBasic.SelectScene": [],
                "libobs.hide_scene_item.background": [],
                "libobs.hide_scene_item.comment": [],
                "libobs.hide_scene_item.screen": [],
                "libobs.hide_scene_item.speaker": [],
                "libobs.show_scene_item.background": [],
                "libobs.show_scene_item.comment": [],
                "libobs.show_scene_item.screen": [],
                "libobs.show_scene_item.speaker": []
            },
            "id": "scene",
            "mixers": 0,
            "monitoring_type": 0,
            "muted": false,
            "name": "On",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "custom_size": false,
                "id_counter": 4,
                "items": [
                    {
                        "align": 5,
                        "bounds": {
                            "x": 1.0,
                            "y": 1.0
                        },
                        "bounds_align": 0,
                        "bounds_type": 0,
                        "crop_bottom": 0,
                        "crop_left": 0,
                        "crop_right": 0,
                        "crop_top": 0,
                        "group_item_backup": false,
                        "id": 3,
                        "locked": true,
                        "name": "screen",
                        "pos": {
                            "x": 58.0,
                            "y": 180.0
                        },
                        "private_settings": {},
                        "rot": 0.0,
                        "scale": {
                            "x": 0.78,
                            "y": 0.78
                        },
                        "scale_filter": "disable",
                        "visible": true
                    },
                    {
                        "align": 5,
                        "bounds": {
                            "x": 1.0,
                            "y": 1.0
                        },
                        "bounds_align": 0,
                        "bounds_type": 0,
                        "crop_bottom": 0,
                        "crop_left": 96,
                        "crop_right": 96,
                        "crop_top": 0,
                        "group_item_backup": false,
                        "id": 2,
                        "locked": true,
                        "name": "speaker",
                        "pos": {
                            "x": 1613.0,
                            "y": 773.0
                        },
                        "private_settings": {},
                        "rot": 0.0,
                        "scale": {
                            "x": 0.13,
                            "y": 0.13
                        },
                        "scale_filter": "disable",
                        "visible": true
                    },
                    {
                        "align": 5,
                        "bounds": {
                            "x": 0.0,
                            "y": 0.0
                        },
                        "bounds_align": 0,
                        "bounds_type": 0,
                        "crop_bottom": 0,
                        "crop_left": 0,
                        "crop_right": 0,
                        "crop_top": 0,
                        "group_item_backup": false,
                        "id": 1,
                        "locked": true,
                        "name": "background",
                        "pos": {
                            "x": 0.0,
                            "y": 0.0
                        },
                        "private_settings": {},
                        "rot": 0.0,
                        "scale": {
                            "x": 1.0,
                            "y": 1.0
                        },
                        "scale_filter": "disable",
                        "visible": true
                    },
                    {
                        "align": 5,
                        "bounds": {
                            "x": 1.0,
                            "y": 1.0
                        },
                        "bounds_align": 0,
                        "bounds_type": 0,
                        "crop_bottom": 0,
                        "crop_left": 0,
                        "crop_right": 0,
                        "crop_top": 0,
                        "group_item_backup": false,
                        "id": 4,
                        "locked": true,
                        "name": "comment",
                        "pos": {
                            "x": 1613.0,
                            "y": 180.0
                        },
                        "private_settings": {},
                        "rot": 0.0,
                        "scale": {
                            "x": 1.0,
                            "y": 1.0
                        },
                        "scale_filter": "disable",
                        "visible": true
                    }
                ]
            },
            "sync": 0,
            "versioned_id": "scene",
            "volume": 1.0
        },
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "libobs.mute": [],
                "libobs.push-to-mute": [],
                "libobs.push-to-talk": [],
                "libobs.unmute": []
            },
            "id": "browser_source",
            "mixers": 255,
            "monitoring_type": 0,
            "muted": false,
            "name": "background",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "height": 1080,
                "url": "https://mango.exps.pw/NISRA/index.html?title=Rev%20Android&speaker=halloworld",
                "width": 1920
            },
            "sync": 0,
            "versioned_id": "browser_source",
            "volume": 1.0
        },
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "libobs.mute": [],
                "libobs.push-to-mute": [],
                "libobs.push-to-talk": [],
                "libobs.unmute": []
            },
            "id": "dshow_input",
            "mixers": 255,
            "monitoring_type": 0,
            "muted": false,
            "name": "speaker",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "last_video_device_id": "ACASIS:\\\\?\\usb#22vid_1bcf&pid_2c99&mi_00#226&16e779&0&0000#22{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global",
                "video_device_id": "ACASIS:\\\\?\\usb#22vid_1bcf&pid_2c99&mi_00#226&16e779&0&0000#22{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global"
            },
            "sync": 0,
            "versioned_id": "dshow_input",
            "volume": 1.0
        },
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "libobs.mute": [],
                "libobs.push-to-mute": [],
                "libobs.push-to-talk": [],
                "libobs.unmute": []
            },
            "id": "dshow_input",
            "mixers": 255,
            "monitoring_type": 0,
            "muted": false,
            "name": "screen",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "last_video_device_id": "ACASIS:\\\\?\\usb#22vid_1bcf&pid_2c99&mi_00#226&12d0981e&0&0000#22{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global",
                "video_device_id": "ACASIS:\\\\?\\usb#22vid_1bcf&pid_2c99&mi_00#226&12d0981e&0&0000#22{65e8773d-8f56-11d0-a3b9-00a0c9223196}\\global"
            },
            "sync": 0,
            "versioned_id": "dshow_input",
            "volume": 1.0
        },
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "libobs.mute": [],
                "libobs.push-to-mute": [],
                "libobs.push-to-talk": [],
                "libobs.unmute": []
            },
            "id": "browser_source",
            "mixers": 255,
            "monitoring_type": 0,
            "muted": false,
            "name": "comment",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "css": "body { background-color: rgba(0, 0, 0, 0); margin: 0px auto; overflow: hidden; font-size: 20px;}",
                "height": 480,
                "url": "http://comment.nisra.net/?url=http://z.fjucpc.tk:8080/messages&slido=tz1joxgi",
                "width": 250
            },
            "sync": 0,
            "versioned_id": "browser_source",
            "volume": 1.0
        },
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "OBSBasic.SelectScene": [],
                "libobs.hide_scene_item.text": [],
                "libobs.show_scene_item.text": []
            },
            "id": "scene",
            "mixers": 0,
            "monitoring_type": 0,
            "muted": false,
            "name": "bye",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "custom_size": false,
                "id_counter": 1,
                "items": [
                    {
                        "align": 5,
                        "bounds": {
                            "x": 0.0,
                            "y": 0.0
                        },
                        "bounds_align": 0,
                        "bounds_type": 0,
                        "crop_bottom": 0,
                        "crop_left": 0,
                        "crop_right": 0,
                        "crop_top": 0,
                        "group_item_backup": false,
                        "id": 1,
                        "locked": true,
                        "name": "text",
                        "pos": {
                            "x": 0.0,
                            "y": 0.0
                        },
                        "private_settings": {},
                        "rot": 0.0,
                        "scale": {
                            "x": 1.0,
                            "y": 1.0
                        },
                        "scale_filter": "disable",
                        "visible": true
                    }
                ]
            },
            "sync": 0,
            "versioned_id": "scene",
            "volume": 1.0
        },
        {
            "balance": 0.5,
            "deinterlace_field_order": 0,
            "deinterlace_mode": 0,
            "enabled": true,
            "flags": 0,
            "hotkeys": {
                "libobs.mute": [],
                "libobs.push-to-mute": [],
                "libobs.push-to-talk": [],
                "libobs.unmute": []
            },
            "id": "browser_source",
            "mixers": 255,
            "monitoring_type": 0,
            "muted": false,
            "name": "text",
            "prev_ver": 419430408,
            "private_settings": {},
            "push-to-mute": false,
            "push-to-mute-delay": 0,
            "push-to-talk": false,
            "push-to-talk-delay": 0,
            "settings": {
                "height": 1080,
                "url": "https://mango.exps.pw/NISRA/word.html?word=Bye",
                "width": 1920
            },
            "sync": 0,
            "versioned_id": "browser_source",
            "volume": 1.0
        }
    ],
    "transition_duration": 300,
    "transitions": []
}
