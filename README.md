# currency
javascript library for currency mask/formatting fully Unicode CLDR compliant

Usage:

<script src="currency.js"></script>
const currency = new Currency(); // Constructor detects the browser locale and appropriate currency or fallback to en-US/USD

Changing locale:<br>
currency.setLocale( "pt-BR" ); // Brazilian Portuguese

Changing currency:<br>
currency.setCurrency( "EUR" ); // Euro

Masking input:<br>
currency.maskInput( "#inputElementId" ); // Apply a input mask to the element according selected locale/currency

Formatting output:<br>
document.getElementById( "outputElementId" ).innerText = currency.format( value );

Obtaining value from formatted string:<br>
value = currency.getValue( strValue );
