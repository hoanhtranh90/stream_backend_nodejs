const NodeMediaServer = require('node-media-server')


const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    mediaroot: './media/', // Suggest writing
    allow_origin: '*',
  },
  trans: { // Here, the parameter is a trans parameter, not a relay parameter. The hls configuration in the relay parameter is invalid
    ffmpeg: 'C:/ProgramData/chocolatey/lib/ffmpeg/tools/ffmpeg/bin/ffmpeg.exe',//Indicates the FFmpeg location
    tasks: [
      {
        app: 'live',
        ac: 'aac',
        vc: 'libx264',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: true,
        dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
      }
    ]
  }
}


var nms = new NodeMediaServer(config)
nms.run()
