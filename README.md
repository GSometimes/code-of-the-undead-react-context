# Code of the Undead: Firewall of Resilience

Valiant Protectors of the Digital Realm,

As the darkness of the zombie apocalypse descends, our city's lifeline hinges on the prowess of your code. We call upon you, the dauntless coders and guardians of humanity's last stronghold, to wield your skills and activate the ancient carousel shield—the digital bastion against the encroaching undead.

Armed with React's agility, TypeScript's might, and Framer Motion's grace, you will embark on Operation Firewall, a critical mission to construct an impregnable defense system. Your code will breathe life into the animated interfaces that stand vigilant over our city's safety. This is not merely a call to action—it is a summons to become part of a legend.

In our hour of need, as the undead evolve and threaten to breach our walls, your mission is paramount. With every line of code, you will fortify our defenses, build our resilience, and etch your name alongside the heroes of our age. Rise, coders, for your time is now, and the future—our city's very survival—rests in the strength of your keystrokes.

Stand with us, and together, let us cast a Firewall of Resilience that will echo through eternity.

May the code empower you.

# Mission Initialization

Valiant Protectors of the Digital Fortress, our sanctuary city, a bastion of hope in a world besieged by the undead, teeters perilously at the edge of a digital abyss. Your arsenal in this epic battle? A symphony of keystrokes, crafting the very essence of React's powerful magic. Your sacred quest is to animate the lifeblood of our defenses – the enigmatic carousel shield, an intricate tapestry woven from the fabric of React.

The repository of ancient scripts awaits your command, holding within its depths the foundational grimoire for your React journey. This tome is your beacon, guiding you through the arcane intricacies of React, a path that holds the key to fortifying our city's digital ramparts. Rise, brave code warriors, for in your mastery of React, our city finds its shield against the encroaching darkness.

**Invoke the Creation Ritual.** Begin your arcane quest by invoking the `npx create-react-app` spell with the `--template typescript` incantation, conjuring the foundational structure of your React fortress. This sacred rite will lay the groundwork for your TypeScript-powered sanctuary.

```js
npx create-react-app react-context --template typescript
```

**Journey to the React Bastion.** With the realm created, navigate to your newly formed citadel by entering the `cd your-app-name` command. Here, in this digital fortress, you will harness the powers of React and TypeScript to craft your defenses.

**Summon the Tailwind Spirits.** Invoke the mystical Tailwind CSS by casting `npm install tailwindcss postcss autoprefixer` followed by `npx tailwindcss init -p`. This spell weaves the essence of Tailwind into your domain, granting you the power to style your bastion with elegance and speed.

```js
npm install -D tailwindcss
npx tailwindcss init
```

In the tailwind.config.js file paste this snippet.

```css
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In the Index.css file paste the Tailwind Directives.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Test that Tailwind has been installed correctly. Replace boilerplate code in App.tsx with this test code.

```js
<h1 className='text-3xl font-bold underline'> Hello world! </h1>
```

**Channel the Framer Motion Essence.** To imbue your sanctuary with life, summon the Framer Motion spirits using `npm install framer-motion`. This enchantment will bestow upon your creations the ability to move and transform, breathing life into your digital constructs.

```js
npm install framer-motion
```

**Bind the Scroll of React.** Call forth the ancient scroll of React-Scroll by casting `npm install react-scroll`. This arcane script will allow your fortress's inhabitants to navigate through its vastness with ease, traversing the digital landscape as if carried by the wind.

```js
npm install react-scroll
npm install @types/react-scroll
```

**Conjure the AOS (Animate On Scroll) Magic.** In your quest to fortify the digital fortress, summon the mystical energies of Animate On Scroll (AOS) by casting the incantation `npm install aos`. This powerful spell will infuse your realm with the ability to animate elements as they enter the viewport, imbuing your fortress with a dynamic, living essence.

```js
npm install aos
npm install @types/aos
```

**Test Your Magical Constructs.** With your spells cast and your defenses fortified, invoke `npm start` to breathe life into your creation. Witness as your digital fortress takes shape, with each enchantment from Tailwind's styling to Framer Motion's animations working in unison to repel the impending digital onslaught. From here, you will channel the combined powers of React, TypeScript, Tailwind, and Framer Motion,

Stand ready, brave coder. Your skills in the arcane arts of React, TypeScript, and the allied libraries are the bulwark against the darkness. May your code hold strong against the tide of the undead.

# Mission Start

## Setup Folder Structure

In your `src` directory, you'll want to create directories for `assets`, `components`, `pages`, `utils`, and `context`.

![Directories](carousel-javascript-challenge/assets/carousel.jpg)

## Update Tailwind Config and Import Fonts
While Tailwind has a pretty vast library of colors, fonts, shadows, etc., it does give you the ability to add your own. To prepare us for what's coming later we're going to pre-emptively add colors, a default font, and a box-shadow, so you can how to add custom CSS to your application that is using Tailwind CSS.

tailwind.config.js - 
```js
/** @type  {import('tailwindcss').Config} */
module.exports  = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
		colors: {
		'primary-green':  '#0C4B23',
		'secondary-green':  '#22CE61',
		},
		boxShadow: {
			custom:
			'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;',
		},
	},
	fontFamily: {
		sans: ['Lexend', 'sans-serif'],
	},
	// enables manual dark mode
	darkMode:  'class',
	},
	plugins: [],
};
```

## Create First Component and First Page
The first page we're going to make is the `Sections.tsx` page. This is where we're going to be importing our components as we build them out. After making this page, import it in your `App.tsx` file.

Sections.tsx -
```js
import  React  from  'react'

const  Sections  = () => {
	return (
		<div>Sections</div>
	)
}

export  default  Sections
```
App.tsx - 
```js
function  App() {
	return (
		<>
			<Sections  />
		</>
	);
}

export  default  App;
```

## Building Out The Nav

The navbar is going to be the meat and potatoes of this code along. We're going to be building out the navbar using Framer Motion and React Smooth Scroll. First, you'll see how to build out the navbar using the `useState` hook and then we'll refactor it to use Context.

Nav.tsx - 
```js
import  React  from  'react'

const  Nav  = () => {
	return (
		<div>Nav</div>
	)
}

export  default  Nav;
```

# Code of the Undead: Firewall Chronicles

Prologue:

The city, once on the brink of destruction, now thrived, its survival a testament to Alex's coding prowess. However, a new threat loomed on the horizon, one that the existing JavaScript defenses couldn't repel. The undead, evolving beyond their previous limitations, posed a grave danger once again.

Act 1:

Alex, now a celebrated defender of the city, realized the need for a more advanced defense system. The council initiated "Operation Firewall," aiming to develop an impenetrable digital shield using cutting-edge technologies like React, Framer Motion, Context, and TypeScript. This new system would not only enhance security but also bring a dynamic user interface to the city's control systems.

Act 2:

Alex and a team of skilled coders dove into the task. They envisioned a control dashboard with an animated navbar and a hero section, easily navigable and responsive to the needs of the city's defenders. Using React for efficient UI development, TypeScript for robust coding, and Framer Motion for fluid animations, they set out to create an interface that was both functional and visually impressive. The navbar would include intuitive, animated menus, and the hero section, a central display of the city's status, with a light/dark mode toggle for accessibility.

The coding team meticulously crafted each component, integrating Context for state management, ensuring seamless communication across the interface. The hero section, with its real-time updates and animated features, became the heart of the city's new defense mechanism.

Act 3:

As the undead horde approached, the new system was put to the test. The animated navbar allowed for rapid navigation between defense modules, while the hero section displayed real-time analytics of the breach points. The light/dark mode proved essential in varying visibility conditions. Alex and the team manipulated the firewall through the interface, orchestrating a symphony of defensive strategies. They unleashed a series of countermeasures, coded with precision and brought to life through the animated interface.

The firewall, powered by their innovative coding, adapted to each new challenge, repelling the undead with unprecedented efficiency. It wasn't just a barrier but a dynamic entity, capable of learning and evolving.

Epilogue:

In the aftermath, the city emerged unscathed, its new firewall an unbreakable shield. Alex and the team were hailed as heroes, their coding skills having saved the city once more. The control interface, with its animated navbar and hero section, stood as a symbol of their triumph.

As the world rebuilt from the ruins, the tale of Alex and the fortress city spread, inspiring others to blend technology and resilience. The "Code of the Undead" saga continued, not just as a story of survival, but as a beacon of innovation in the face of darkness.
```
