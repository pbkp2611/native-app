export const qnr = `
<html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <div style="padding: 10;width: 100%;font-size: 18px" >
            Name
            <input type="text"id="name" style="padding: 10;width: 90%;font-size: 18px" />
            <br/>
            <br/>
            Mobile
            <input type="text" id="mb" style="padding: 10;width: 90%;font-size: 18px" />
        </div>

      <script>
        const sendDataToReactNativeApp = async () => {
          var name = document.getElementById("name").value
          window.ReactNativeWebView.postMessage(name);
        };
      </script>
    </body>
</html>        
`

export const next = `
<html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
        <div style="padding: 10;width: 100%;font-size: 18px" >
            State
            <input type="text"id="name" style="padding: 10;width: 90%;font-size: 18px" />
        </div>

    <button
      onclick="sendDataToReactNativeApp()"
        style="
          padding: 10;
          width: 200;
          font-size: 18;
          color: white;
          background-color: #6751ff;
        "
      >
        Next
      </button>

      <script>
        const sendDataToReactNativeApp = async () => {
          var name = document.getElementById("name").value
          window.ReactNativeWebView.postMessage(name);
        };
      </script>
    </body>
</html>        
`