import { Element } from "@mod-protocol/core";

const upload: Element[] = [
  {
    type: "vertical-layout",
    onload: {
      ref: "myFileUploadRequest",
      type: "POST",
      url: "{{api}}/livepeer-video",
      body: {
        formData: {
          file: {
            type: "blobRef",
            value: "refs.myOpenFileAction.files[0].blob",
          },
        },
      },
      onsuccess: {
        type: "ADDEMBED",
        url: "https://lp-playback.com/hls/{{refs.myFileUploadRequest.response.data.data.asset.playbackId}}/index.m3u8",
        name: "{{refs.myOpenFileAction.files[0].name}}",
        mimeType: "{{refs.myOpenFileAction.files[0].mimeType}}",
        onsuccess: {
          type: "EXIT",
        },
      },
      onerror: "#error",
      onloading: "#loading",
    },
  },
];

export default upload;
