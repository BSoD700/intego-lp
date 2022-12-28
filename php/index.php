<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Price Converter</title>
    <style>
      .big {
        font-size: 20px;
        font-weight: 600;
      }
      </style>
</head>
<body>
  <h1>Price Converter</h1>
        <p>
          <?php
           
            function getResponseFromApi($price,$FromCurency,$ToCurency) {
              $curl = curl_init();

              curl_setopt_array($curl, array(
                CURLOPT_URL => "https://api.apilayer.com/exchangerates_data/convert?to=" . $ToCurency . "&from=" . $FromCurency . "&amount=" . $price,
                CURLOPT_HTTPHEADER => array(
                  "Content-Type: text/plain",
                  "apikey: VE5ye4B14zp1bQfCgE0WhjsxrVOYQxKH"
                ),
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => "",
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => "GET"
              ));
  
              $response = curl_exec($curl);
              $manage = json_decode($response, true);
              $arr = json_decode($response, true);

              // echo "<pre>$response</pre>";
             
              curl_close($curl);
              if (isset($manage["error"])) {
                echo print_r($manage["error"]["message"]);
              } else {
                return $manage["result"];
              }
            }
            function rounder($num){
              $fln=0.99;
              $numlength =  $num !== 0 ? floor(log10($num) + 1) : 1; 
              $newNum = $num;
              if ($numlength < 4) {
                $newNum = floor($num)+$fln;
              } elseif ($numlength == 4) {
                $newNum = round(floor($num), -1, PHP_ROUND_HALF_UP);
                if ($newNum < $num) {
                  $newNum = $newNum + 10;
                }
              } elseif ($numlength >= 5) {
                $newNum = round(floor($num), -2, PHP_ROUND_HALF_UP);
                if ($newNum < $num) {
                  $newNum = $newNum + 100;
                }
              }
              return $newNum;
            }
            function PriceConverter($price, $ToCurency) {

              $supportedCurrencies = [
                "USD", "JPY", "GBP", "EUR", "CAD", "AUD", "SEK", "SGD", "MXN", "NZD", "DKK", "BRL", "NOK", "HKD", "CLP", "THB",  "ZAR", "INR", "COP"
              ];
              $symbols = [  
                'AED' => 'د.إ',
                'AFN' => '؋',
                'ALL' => 'L',
                'AMD' => '֏',
                'ANG' => 'ƒ',
                'AOA' => 'Kz',
                'ARS' => '$',
                'AUD' => '$',
                'AWG' => 'ƒ',
                'AZN' => '₼',
                'BAM' => 'KM',
                'BBD' => '$',
                'BDT' => '৳',
                'BGN' => 'лв',
                'BHD' => '.د.ب',
                'BIF' => 'FBu',
                'BMD' => '$',
                'BND' => '$',
                'BOB' => '$b',
                'BRL' => 'R$',
                'BSD' => '$',
                'BTC' => '฿',
                'BTN' => 'Nu.',
                'BWP' => 'P',
                'BYR' => 'Br',
                'BYN' => 'Br',
                'BZD' => 'BZ$',
                'CAD' => '$',
                'CDF' => 'FC',
                'CHF' => 'CHF',
                'CLP' => '$',
                'CNY' => '¥',
                'COP' => '$',
                'CRC' => '₡',
                'CUC' => '$',
                'CUP' => '₱',
                'CVE' => '$',
                'CZK' => 'Kč',
                'DJF' => 'Fdj',
                'DKK' => 'kr',
                'DOP' => 'RD$',
                'DZD' => 'دج',
                'EEK' => 'kr',
                'EGP' => '£',
                'ERN' => 'Nfk',
                'ETB' => 'Br',
                'ETH' => 'Ξ',
                'EUR' => '€',
                'FJD' => '$',
                'FKP' => '£',
                'GBP' => '£',
                'GEL' => '₾',
                'GGP' => '£',
                'GHC' => '₵',
                'GHS' => 'GH₵',
                'GIP' => '£',
                'GMD' => 'D',
                'GNF' => 'FG',
                'GTQ' => 'Q',
                'GYD' => '$',
                'HKD' => '$',
                'HNL' => 'L',
                'HRK' => 'kn',
                'HTG' => 'G',
                'HUF' => 'Ft',
                'IDR' => 'Rp',
                'ILS' => '₪',
                'IMP' => '£',
                'INR' => '₹',
                'IQD' => 'ع.د',
                'IRR' => '﷼',
                'ISK' => 'kr',
                'JEP' => '£',
                'JMD' => 'J$',
                'JOD' => 'JD',
                'JPY' => '¥',
                'KES' => 'KSh',
                'KGS' => 'лв',
                'KHR' => '៛',
                'KMF' => 'CF',
                'KPW' => '₩',
                'KRW' => '₩',
                'KWD' => 'KD',
                'KYD' => '$',
                'KZT' => 'лв',
                'LAK' => '₭',
                'LBP' => '£',
                'LKR' => '₨',
                'LRD' => '$',
                'LSL' => 'M',
                'LTC' => 'Ł',
                'LTL' => 'Lt',
                'LVL' => 'Ls',
                'LYD' => 'LD',
                'MAD' => 'MAD',
                'MDL' => 'lei',
                'MGA' => 'Ar',
                'MKD' => 'ден',
                'MMK' => 'K',
                'MNT' => '₮',
                'MOP' => 'MOP$',
                'MRO' => 'UM',
                'MRU' => 'UM',
                'MUR' => '₨',
                'MVR' => 'Rf',
                'MWK' => 'MK',
                'MXN' => '$',
                'MYR' => 'RM',
                'MZN' => 'MT',
                'NAD' => '$',
                'NGN' => '₦',
                'NIO' => 'C$',
                'NOK' => 'kr',
                'NPR' => '₨',
                'NZD' => '$',
                'OMR' => '﷼',
                'PAB' => 'B/.',
                'PEN' => 'S/.',
                'PGK' => 'K',
                'PHP' => '₱',
                'PKR' => '₨',
                'PLN' => 'zł',
                'PYG' => 'Gs',
                'QAR' => '﷼',
                'RMB' => '￥',
                'RON' => 'lei',
                'RSD' => 'Дин.',
                'RUB' => '₽',
                'RWF' => 'R₣',
                'SAR' => '﷼',
                'SBD' => '$',
                'SCR' => '₨',
                'SDG' => 'ج.س.',
                'SEK' => 'kr',
                'SGD' => '$',
                'SHP' => '£',
                'SLL' => 'Le',
                'SOS' => 'S',
                'SRD' => '$',
                'SSP' => '£',
                'STD' => 'Db',
                'STN' => 'Db',
                'SVC' => '$',
                'SYP' => '£',
                'SZL' => 'E',
                'THB' => '฿',
                'TJS' => 'SM',
                'TMT' => 'T',
                'TND' => 'د.ت',
                'TOP' => 'T$',
                'TRL' => '₤',
                'TRY' => '₺',
                'TTD' => 'TT$',
                'TVD' => '$',
                'TWD' => 'NT$',
                'TZS' => 'TSh',
                'UAH' => '₴',
                'UGX' => 'USh',
                'USD' => '$',
                'UYU' => '$U',
                'UZS' => 'лв',
                'VEF' => 'Bs',
                'VES' => 'Bs.S',
                'VND' => '₫',
                'VUV' => 'VT',
                'WST' => 'WS$',
                'XAF' => 'FCFA',
                'XBT' => 'Ƀ',
                'XCD' => '$',
                'XOF' => 'CFA',
                'XPF' => '₣',
                'YER' => '﷼',
                'ZAR' => 'R',
                'ZWD' => 'Z$',
              ];
              $TotalPrice = 0;
              $defaultCurency = 'USD';

              if (in_array($ToCurency, $supportedCurrencies)) {
                $TotalPrice = getResponseFromApi($price, $defaultCurency , $ToCurency);
              } else {
                $ToCurency = $defaultCurency;
                $TotalPrice = getResponseFromApi($price, $defaultCurency , $defaultCurency);
              }
              $roundedPrice = rounder($TotalPrice);
              $finalPrice = $roundedPrice . $symbols[$ToCurency];
              echo "<span>The price $price USD in $ToCurency is:</span> ";
              echo "<span class='big'>$finalPrice</span>";
            }

            // Enter Values
            PriceConverter(111510, 'aa');
         ?>
         </p>
</body>
</html>