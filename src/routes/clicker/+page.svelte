
<!DOCTYPE html>
<html lang='en'>

<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Capitalism</title>


</head>
        <body> 
            <h1>The Money Printer</h1>
            <p>This site is for capitalist scum</p>
            <button type="button" onclick="increase()"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg/252px-US_one_dollar_bill%2C_obverse%2C_series_2009.jpg" alt="dollar" id="dollar"></button> 
            <h3>Networth: <span id="amount">0</span></h3>
            <button id = "reset" onclick = "reset()">Brokie button</button>
        <body>
    <script>
        var clicks = 0;
        function increase() {
            clicks = clicks + 1;
            amount.innerHTML = clicks
        }
        function reset() {
            clicks = 0;
            amount.innerHTML = clicks;
        }
    </script>

     <style>
        body {
            background-color: #99ffcc;
            color: purple;
        }
        #amount {
            color: red;
        }
        #dollar {
            width: 300px;
            length: 200px;
        }
        .reset {
            
        }
     </style>

</html>