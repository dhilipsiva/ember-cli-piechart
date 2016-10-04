# ember-cli-piechart

This README outlines the details of collaborating on this Ember addon.

# Usage

`ember install ember-cli-piechart`

`{{pie-chart data=model height=100 width=100}}`

where `data` is an array of `{"value", "color"}`. `height` and `width` of canvas is optional.

A valid `data` might look like this:

```
var data = [
  {"value": 1, "color": "red"},
  {"value": 4.5, "color": "blue"},
  {"value": 2, "color": "yellow"},
  {"value": 3, "color": "green"}
];
```

which will render a pie chart in a canvas like this:

![ember-cli-piechart](https://raw.githubusercontent.com/dhilipsiva/ember-cli-piechart/master/ember-cli-piechart.png)


# Development

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-piechart`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
