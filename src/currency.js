"use strict";

var Currency = function()
{
   const currencies =
   {
      "AC": "SHP",
      "AD": "EUR",
      "AE": "AED",
      "AF": "AFN",
      "AG": "XCD",
      "AI": "XCD",
      "AL": "ALL",
      "AM": "AMD",
      "AO": "AOA",
      "AQ": "XXX",
      "AR": "ARS",
      "AS": "USD",
      "AT": "EUR",
      "AU": "AUD",
      "AW": "AWG",
      "AX": "EUR",
      "AZ": "AZN",
      "BA": "BAM",
      "BB": "BBD",
      "BD": "BDT",
      "BE": "EUR",
      "BF": "XOF",
      "BG": "BGN",
      "BH": "BHD",
      "BI": "BIF",
      "BJ": "XOF",
      "BL": "EUR",
      "BM": "BMD",
      "BN": "BND",
      "BO": "BOB",
      "BQ": "USD",
      "BR": "BRL",
      "BS": "BSD",
      "BT": "BTN",
      "BV": "NOK",
      "BW": "BWP",
      "BY": "BYN",
      "BZ": "BZD",
      "CA": "CAD",
      "CC": "AUD",
      "CD": "CDF",
      "CF": "XAF",
      "CG": "XAF",
      "CH": "CHF",
      "CI": "XOF",
      "CK": "NZD",
      "CL": "CLP",
      "CM": "XAF",
      "CN": "CNY",
      "CO": "COP",
      "CP": "XXX",
      "CR": "CRC",
      "CU": "CUP",
      "CV": "CVE",
      "CW": "ANG",
      "CX": "AUD",
      "CY": "EUR",
      "CZ": "CZK",
      "DE": "EUR",
      "DG": "USD",
      "DJ": "DJF",
      "DK": "DKK",
      "DM": "XCD",
      "DO": "DOP",
      "DZ": "DZD",
      "EA": "EUR",
      "EC": "USD",
      "EE": "EUR",
      "EG": "EGP",
      "EH": "MAD",
      "ER": "ERN",
      "ES": "EUR",
      "ET": "ETB",
      "EU": "EUR",
      "FI": "EUR",
      "FJ": "FJD",
      "FK": "FKP",
      "FM": "USD",
      "FO": "DKK",
      "FR": "EUR",
      "GA": "XAF",
      "GB": "GBP",
      "GD": "XCD",
      "GE": "GEL",
      "GF": "EUR",
      "GG": "GBP",
      "GH": "GHS",
      "GI": "GIP",
      "GL": "DKK",
      "GM": "GMD",
      "GN": "GNF",
      "GP": "EUR",
      "GQ": "XAF",
      "GR": "EUR",
      "GS": "GBP",
      "GT": "GTQ",
      "GU": "USD",
      "GW": "XOF",
      "GY": "GYD",
      "HK": "HKD",
      "HM": "AUD",
      "HN": "HNL",
      "HR": "HRK",
      "HT": "HTG",
      "HU": "HUF",
      "IC": "EUR",
      "ID": "IDR",
      "IE": "EUR",
      "IL": "ILS",
      "IM": "GBP",
      "IN": "INR",
      "IO": "USD",
      "IQ": "IQD",
      "IR": "IRR",
      "IS": "ISK",
      "IT": "EUR",
      "JE": "GBP",
      "JM": "JMD",
      "JO": "JOD",
      "JP": "JPY",
      "KE": "KES",
      "KG": "KGS",
      "KH": "KHR",
      "KI": "AUD",
      "KM": "KMF",
      "KN": "XCD",
      "KP": "KPW",
      "KR": "KRW",
      "KW": "KWD",
      "KY": "KYD",
      "KZ": "KZT",
      "LA": "LAK",
      "LB": "LBP",
      "LC": "XCD",
      "LI": "CHF",
      "LK": "LKR",
      "LR": "LRD",
      "LS": "ZAR",
      "LT": "EUR",
      "LU": "EUR",
      "LV": "EUR",
      "LY": "LYD",
      "MA": "MAD",
      "MC": "EUR",
      "MD": "MDL",
      "ME": "EUR",
      "MF": "EUR",
      "MG": "MGA",
      "MH": "USD",
      "MK": "MKD",
      "ML": "XOF",
      "MM": "MMK",
      "MN": "MNT",
      "MO": "MOP",
      "MP": "USD",
      "MQ": "EUR",
      "MR": "MRU",
      "MS": "XCD",
      "MT": "EUR",
      "MU": "MUR",
      "MV": "MVR",
      "MW": "MWK",
      "MX": "MXN",
      "MY": "MYR",
      "MZ": "MZN",
      "NA": "NAD",
      "NC": "XPF",
      "NE": "XOF",
      "NF": "AUD",
      "NG": "NGN",
      "NI": "NIO",
      "NL": "EUR",
      "NO": "NOK",
      "NP": "NPR",
      "NR": "AUD",
      "NU": "NZD",
      "NZ": "NZD",
      "OM": "OMR",
      "PA": "PAB",
      "PE": "PEN",
      "PF": "XPF",
      "PG": "PGK",
      "PH": "PHP",
      "PK": "PKR",
      "PL": "PLN",
      "PM": "EUR",
      "PN": "NZD",
      "PR": "USD",
      "PS": "ILS",
      "PT": "EUR",
      "PW": "USD",
      "PY": "PYG",
      "QA": "QAR",
      "RE": "EUR",
      "RO": "RON",
      "RS": "RSD",
      "RU": "RUB",
      "RW": "RWF",
      "SA": "SAR",
      "SB": "SBD",
      "SC": "SCR",
      "SD": "SDG",
      "SE": "SEK",
      "SG": "SGD",
      "SH": "SHP",
      "SI": "EUR",
      "SJ": "NOK",
      "SK": "EUR",
      "SL": "SLL",
      "SM": "EUR",
      "SN": "XOF",
      "SO": "SOS",
      "SR": "SRD",
      "SS": "SSP",
      "ST": "STN",
      "SV": "USD",
      "SX": "ANG",
      "SY": "SYP",
      "SZ": "SZL",
      "TA": "GBP",
      "TC": "USD",
      "TD": "XAF",
      "TF": "EUR",
      "TG": "XOF",
      "TH": "THB",
      "TJ": "TJS",
      "TK": "NZD",
      "TL": "USD",
      "TM": "TMT",
      "TN": "TND",
      "TO": "TOP",
      "TR": "TRY",
      "TT": "TTD",
      "TV": "AUD",
      "TW": "TWD",
      "TZ": "TZS",
      "UA": "UAH",
      "UG": "UGX",
      "UM": "USD",
      "US": "USD",
      "UY": "UYU",
      "UZ": "UZS",
      "VA": "EUR",
      "VC": "XCD",
      "VE": "VES",
      "VG": "USD",
      "VI": "USD",
      "VN": "VND",
      "VU": "VUV",
      "WF": "XPF",
      "WS": "WST",
      "XK": "EUR",
      "YE": "YER",
      "YT": "EUR",
      "ZA": "ZAR",
      "ZM": "ZMW",
      "ZW": "USD",
      "ZZ": "XAG"
   }, 
   mask = function( value )
   {
      value = typeof value == "string" ? getValue( value ) : getValue( value.toFixed( fractionDigits ) );
      let retVal = Intl.NumberFormat( locale, { style: "decimal", minimumFractionDigits: fractionDigits } ).format( value );
      if( Object.is( value, -0 ) )
      {
         retVal = "-" + retVal;
      }
      return retVal;
   },
   getCurrencyFromLocale = function( locale )
   {
      try
      {
         locale = Intl.getCanonicalLocales( locale )[ 0 ].split( "-" ).slice( -1 ).pop() ||
                  Intl.getCanonicalLocales( navigator.language )[ 0 ].split( "-" ).slice( -1 ).pop();
      }
      catch( err )
      {
         locale = "US";
      }
   
      return currencies[ locale ] || "USD";
   },
   getParts = function()
   {
      new Intl.NumberFormat( locale, { style: "currency", currency: currency } ).formatToParts( 1000.01 ).forEach( function( p )
      {
         if( p.type == "currency" )
         {
            symbol = p.value;
         }
         else
         {
            if( p.type == "literal" )
            {
               literal = p.value;
            }
            else
            {
               if( p.type == "group" )
               {
                  group = p.value;
               }
               else
               {
                  if( p.type == "decimal" )
                  {
                     decimal = p.value;
                  }
                  else
                  {
                     if( p.type == "fraction" )
                     {
                        fractionDigits = p.value.length;
                     }
                  }
               }
            }
         }
      } );
   },
   getValue = function( value )
   {
      let signal = value.indexOf( "-" ) == 0 ? "-" : "";
      let strVal = value.replace( /\D/g, "" );
      let retVal = [ signal, ( strVal / Math.pow( 10, fractionDigits ) ).toFixed( fractionDigits ) ].join( "" );

      return parseFloat( retVal );
   },
   preserveCaret = function( event )
   {
      let caretPos = 0;

      if( specialKey( event.key ) || event.key == "Backspace" || ( event.key >= "0" && event.key <= "9" ) || event.key == "-" )
      {
         let el = event.target;
         let value = el.value;
         let caretPos;

         if( el.selectionStart || el.selectionStart == 0 )
         {
            if( el.selectionStart != el.selectionEnd )
            {
               caretPos = el.selectionEnd;
            }
            else
            {
               caretPos = el.selectionStart;
            }
         }
         if( event.key == "-" )
         {
            if( caretPos != 0 || el.value.charAt( 0 ) == "-" )
            {
               event.preventDefault();
               return false;
            }
            else
            {
               caretPos = el.value.length;
            }
         }

         if( event.key == "Backspace" )
         {
            if( value.charAt( caretPos - 1 ) == group || value.charAt( caretPos - 1 ) == decimal )
            {
               el.value = value.substr( 0, caretPos - 2 ) + value.substr( caretPos ) + '0';
               caretPos--;
            }
         }
         else
         {
            if( value.length > 19 && !specialKey( event.key ) )
            {
               event.preventDefault();
               return false;
            }
         }
         el.dataset.caret = el.value.length - caretPos;
      }
      else
      {
         event.preventDefault();
         return false;
      }
   },
   setCaretPosition = function( element, pos )
   {
      element.selectionStart = element.selectionEnd = pos;
   },
   specialKey = function( key )
   {
      switch( key )
      {
         case "Shift":
         case "Control":
         case "Alt":
         case "Escape":
         case "End":
         case "Home":
         case "ArrowLeft":
         case "ArrowUp":
         case "ArrowRight":
         case "ArrowDown":
         case "Tab":
         case "Enter":
            return true;
         default:
            return false;
      }
   },
   update = function( event )
   {
      if( specialKey( event.key ) || ( event.key < "0" || event.key > "9" ) && !( event.key == "Backspace" || event.key == "-" ) )
      {
         return;
      }
      event.target.value = mask( event.target.value );
      setCaretPosition( event.target, event.target.value.length - event.target.dataset.caret );
   };

   this.getValue = getValue;

   this.format = function( value )
   {
      value = typeof value == "string" ? getValue( value ) : getValue( value.toFixed( fractionDigits ) );
      return Intl.NumberFormat( locale, { style: "currency", currency: currency } ).format( value );
   }

   this.mask = mask;

   this.maskInput = function( selector )
   {
      var element = top.document.querySelector( selector );
      element.value = mask( element.value );
      element.onfocus = update;
      element.onkeyup = update;
      element.onkeydown = preserveCaret;
   };

   this.setCurrency = function( newCurrency )
   {
      for( let country in currencies )
      {
         if( currencies[ country ] == newCurrency )
         {
            currency = currencies[ country ];
            break;
         }
      }
      getParts();
   };

   this.setLocale = function( newLocale )
   {
      locale = Intl.NumberFormat( newLocale ).resolvedOptions().locale;
      getParts();
   };

   let currency,
       decimal,
       fractionDigits,
       group,
       literal,
       locale,
       symbol;

   locale = Intl.NumberFormat( navigator.language ).resolvedOptions().locale || "en-US";
   currency = getCurrencyFromLocale( locale );
   getParts();

   return this;
}
