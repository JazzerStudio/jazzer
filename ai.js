
    function sendRequest() {
      const url = 'http://chatopenai.sboomtools.net:81/api/chat/completions';
      const headers = {
        'Authorization': 'Bearer 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',
        'Content-Type': 'application/json',
      };

      const textInput = document.getElementById('textInput').value;

      const body = {
        "max_tokens": 2000,
        "messages": [
          {
            "content": textInput,
            "role": "user"
          }
        ],
        "model": "gpt-3.5-turbo",
        "signature": "19f39d85fde3a269c5cf2d9d4770d84a8d716675cbae80fc342bdc3d4dee3fd7",
        "timestamp": 1695826378
      };

      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => {
          // Handle response data here
          console.log(data); // Log the entire response object

          // Access specific properties of the response
          const completion = data.choices[0].text;
          console.log(completion); // Log the generated completion text
        })
        .catch(error => {
          // Handle error here
          console.error(error);
        });
    }
