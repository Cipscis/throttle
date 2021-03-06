# Throttle Changelog

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2021-09-27

### Added

* A throttled function now returns the value returned by the initial function, or undefined if called within the cooldown period.

### Changed

* Converted to TypeScript.
* Updated build system.

## [1.1.0] - 2021-06-26

### Added

* Added unit tests using [Jasmine](https://jasmine.github.io/).
* Added named `throttle` export.
* Added GitHub workflow to deploy to GitHub Pages automatically.

### Changed

* Don't use `window` object to retrieve timeout functions, so `throttle` can also work in NodeJS.
* Updated build system.

## [1.0.3] - 2021-05-29

### Changed

* Rebuilt bundle.

## [1.0.2] - 2021-05-26

### Fixed

* Fixed error in build system.

## [1.0.1] - 2021-05-26

### Changed

* Pulled documentation into `main` branch.

## [1.0.0] - 2021-05-23

### Added

* Initial commit.
