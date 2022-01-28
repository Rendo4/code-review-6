import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import  ExchangeRate from './exchange.js';

$(document).ready(function() {
  $('#convert').click(function() {
    event.preventDefault();
    const amount = $('#number').val();
    const currency = $("#money").val();
    $("#numbers").val("");
    $("#money").val("");

    (async () => {
      let exchangeRate = new ExchangeRate();
      const response = await exchangeRate.getMoneybyCurrency(amount, currency);
      getElements(response);
    })();

    function getElements(response) {
      if (response) {
        $('.showResults').text(`You would have ${response.conversion_rates[currency] * amount} currency in that country`);
        $('.showErrors').text("");
      } else {
        $('.showResults').text(`There was an error handeling your request`);
        $('.showError').text("Please check your inputs and try again");
      }
    }
  });
});