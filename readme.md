# Todo Compared

Comparing JS libraries by implementing simple todo apps.

<table>
    <thead>
        <tr>
            <th>Library</th>
            <th>Good</th>
            <th>Bad</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>React</td>
            <td>
                <ul>
                    <li>Easy access. You know JS? You are pretty much there...</li>
                    <li>Great community</li>
                    <li>Unopinionated</li>
                </ul>
            </td>
            <td>
                <ul>
                <li>JSX can be messy</li>
                <li>Unopinionated can result in a lack of structure. You are the captain!</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Angular 2</td>
            <td>
                <ul>
                    <li>Extremely structured</li>
                    <li>Good DI (makes everything more extensible, overridable and testable) > this is just an observation, test it out</li>
                    <li>Typescript</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Extremely structured</li>
                    <li>Tough learning curve (a lot of internals and syntax to learn)</li>
                    <li>Really really (too) big! (TODO: see if tree shaking really helps)</li>
                    <li>Experimental annotations that will probably never end up in official ECMAScript specs are scary</li>
                    <li>Documentation is kindof messy (may need some getting use to)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Vue (*1)</td>
            <td>
                <ul>
                    <li>Good learning curve</li>
                    <li>Very good community and documentation</li>
                    <li>Simple and clear syntax</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Vue is not going for classes as component, not super important, just a bit sad. (*2)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Riotjs</td>
            <td>
                <ul>
                    <li>Simple and clear syntax</li>
                    <li>Good documentation</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>Component declaration is a bit chaotic, throwing classes and variables in the global scope. It relies a lot on its internal parsing which is not obvious when you look at the code and therefore it kinda looks weird.</li>
                    <li>Resurrected onclick, onsubmit, etc... for simplicity sake. One step forward and two steps back kind of thing.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>Aurelia</td>
            <td>
            </td>
            <td>
                <ul>
                    <li>I was interrested by Aurelia so I tried to set it up with the usual Webpack but no... There is stuff developped to make it possible but this is all too complicated just to setup the Framework. To be continued...</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

*(1) Basically, AngularJS and React child*<br>
*(2) It is possible using [vue-class-component](https://github.com/vuejs/vue-class-component) but it uses experimental annotations like Angular 2.*

## How to use

You need npm v3.

```
npm install
```

Commands:
- **npm run angular2**
- **npm run riot**
- **npm run vue**
- **npm run react**

The servers run on the port 8080.
