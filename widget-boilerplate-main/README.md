# widget-boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instructions for this project
### General Points
- Tools: TypeScript, styled-components, material-ui
    - You should be typing your variables, functions, etc. where it can't be inferred
    - Use styled-components to create your JSX components (divs, spans, etc)
    - Use material-ui for out of the box components so you don't spend a ton of time making a perfect `<button>` component
- Use multiple components, with as much abstraction as you think is necessary to show off your skills. E.g. create reusable components even if you aren't using it in multiple places as part of this project. 
- Use functional components and React Hooks (e.g. `useState`, `useEffect`, `useRef`)
- Add comments, name variables well, extract strings into variables, etc. -- Basically: show us good code style
- Unit tests are optional. If you add them, use Jest (follow instructions on the official React documentation page)
- If you pull inspiration for your code from StackOverflow or online resources, please add a comment with the link. (Don't worry! We aren't testing you on how much you know straight from memory, this is the practice we use in our codebase)

### Writing Code
After you pull this repo, create a branch off of `master` with your name (e.g. "git checkout -b pouyas-widget). This is where you'll commit your code. 
- DO NOT COMMIT TO MASTER

Project Structure:
- Your widget's wrapper component is `MyWidget.tsx`
- You should create reusable components in seperate files for the custom behavior of your widget. 
    - For example, if you're creating a Clock widget, you would create `Clock.tsx` for the main body of the widget, and then `ClockHeader.tsx` for the header component. 
- Don't reinvent the wheel-unless it's the core of the Widget that you're making. 
    - E.g. you want to add a simple hover tooltip somewhere, then just use an npm package (e.g. `react-tooltip`). Don't waste time building it from scratch. 
    - E.g. you're creating a stopwatch widget, DON'T use an existing package for this. We want to see how you write logic and approach problems with state management, UI updates, etc.

Other things we'd like to see: 
- Calling an API and handling results
- If you are mocking data, simply store it in a JSON file (make a `data/` directory at the root of this project)
- Take pride in this project and make it aesthetically pleasing (without burning too much time making it pixel perfect!), have good UX flows--things should make sense (take inspiration from your favorite products that you use and use similar UX flows)
- Use git. We want to see good, logical commits with reasonable commit messages. 
- Ask for help! If you're confused on the instructions, have a TypeScript or React question, etc. please reach out. Just as if you were working with us on a day-to-day basis. 

### Submitting the project
Aim to spend no more than a week on this. We know life is busy with full time work, etc, but we want to see if you can move fast and deliver results, even if it's less than perfect. 

When you're ready to have your code reviewed by our team, do the following:
1. Push your branch to remote
2. Open a pull request to merge your branch into `master`
3. Assign yourself to the PR, and add Pouya as a reviewer `pouya-lifeat`
4. Email us that you're ready for us to take a look.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
