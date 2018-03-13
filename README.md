# AEM Talis

> Such, or of such a sort

#### Goal
To utilize web components as a system for markup encapsulation and design pattern definition.

#### Assumptions
* No client side JS libraries or frameworks. This should be completely vanilla web components.
* Polyfilled to support browsers back to IE11. Polyfills will be loaded on an as needed basis.
* Web components will be integrated into AEM Components and Pages and will act as an interface for including design patterns.

#### Quick Links

###### Example web component definition
[/talis-frontend/elements/topic-preview.js](https://github.com/megazear7/talis/blob/master/talis-frontend/elements/topic-preview.js)

###### Example usage in an AEM Component
[/apps/talis/components/content/featuredstory/featuredstory.html](https://github.com/megazear7/talis/blob/master/talis-ui/src/main/content/jcr_root/apps/talis/components/content/featuredstory/featuredstory.html)

###### Example usage in an AEM Page
[/apps/talis/components/page/empty/content.html](https://github.com/megazear7/talis/blob/master/talis-ui/src/main/content/jcr_root/apps/talis/components/page/empty/content.html)

###### Frontend gulp build
[/talis-frontend/gulpfile.js](https://github.com/megazear7/talis/blob/master/talis-frontend/gulpfile.js)

#### Build
Run the following command from the project root:
```
mvn clean install -Plocal,frontend
```
