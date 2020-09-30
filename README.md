# currency
javascript library for currency mask/formatting fully Unicode CLDR compliant

Usage:

<script src="currency.js"></script>
const currency = new Currency(); // Constructor detects the browser locale and appropriate currency or fallback to en-US/USD

Changing locale:
currency.setLocale( "pt-BR" ); // Brazilian Portuguese

Changing currency:
currency.setCurrency( "EUR" ); // Euro

Masking input:
currency.maskInput( "#inputElementId" ); // Apply a input mask to the element according selected locale/currency

Formatting output:
document.getElementById( "outputElementId" ).innerText = currency.format( value );

Obtaining value from formatted string:
value = currency.getValue( strValue );
