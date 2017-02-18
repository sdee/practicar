import React from 'react';
import { Panel, Accordion } from 'react-bootstrap';

function Readme(props) {
	return (
		<Panel>
			<h2>About</h2>
			<Accordion defaultActiveKey="1">
				<Panel header="Concept" eventKey="1">
					<p id="paragraph1">This app ensures that you get enough practice with your verbs. The best
					way to learn verb endings is not to memorize conjugation tables but to
					instead practice conjugating the verbs in real time as you would
					in a conversation. The app automatically generates flashcards to give you practice with
					many diverse combinations of pronouns, tenses, and verbs. </p>
				</Panel>
			 <Panel header="Why use this app?" eventKey="2">
			 <p>Don&#39;t let the many tenses in Spanish intimidate you or limit you
			 to what you can say in your new favorite language. Verbar is ideal
			 for expanding your knowledge of tenses as well as improving your speed and confidence.</p>
			 </Panel>
				<Panel header="Key difference" eventKey="3">
					<p><b>Unlimited practice: </b>Workbooks and other apps feature curated exercises. This approach is good
					for certain kinds of skills such as complex sentence formation but is limited in the sheer
					amount of practice they can provide. For example, Duolingo will
					introduce a new tense and at best you&#39;ll get a dozen of practice
					questions for that tense. Even when using a 350-page workbook focused on verbs,
					I sometimes felt like I did not have enough practice since the book was spread over many concepts. Because Practicar
					generates questions combinatorially by combining verbs, tenses, and
					pronouns, you'll never run out of practice.</p>
					<p><b>Customization: </b>The best part of this app is that it allows you to customize
					each practice session. You can use the app to focus on weak spots,
					help you keep up with a class, or to help improve
					your speed. You can select the tenses you want to include and decide
					whether you&#39;re ready to tackle irregulars. You only need to
					practice &#39;vosotros&#39; if you&#39;re practicing for a trip
					to Spain.</p>
					<p><b>Focus: </b>This app won&#39;t teach you all of Spanish. In my own personal experience, I have found it helpful to isolate and focus on one skill within a language at a time and then combine them all in frequent, conversation practice. </p>
				</Panel>
				<Panel header="Story" eventKey="4">
					<p>This tool is built around my personal learning style so it might
					not be ideal for everyone. I quit my software job and started to
					travel the world to learn about food. I started in Peru and quickly
					realized how important expanding my language skills was to
					understanding the rich stories people were telling me.</p>
					<p>In the second part of my trip, I found myself on the other side
					of the world in Thailand where I couldn&#39;t find any Spanish classes
					to continue my studies.</p>
					<p>I often tackle challenges like learning a language by trying to
					identify the hardest part and addressing that head-on. I realized
					that the number of tenses in Spanish can be intimidating, made
					more complex by the unfamiliar concepts like the subjunctive tense
					so I figured this was a good place to start.</p>
					<p>I set out to write this app and wrote the first version in two
					weeks while bouncing around various co-working spaces in Chiang Mai.</p>
					<p>Then, a year later, I joined forces with a friend and we rebuilt the app
					while sharing an Airbnb in Ecuador. Together, we were able to build something
					that was faster and actually useful. Without Jake's enthusiasm and expertise, this app would have just been a forgotten, weekend project. </p>
				</Panel>
				<Panel header="Code" eventKey="5">
					<p>This app was written partially as as way for me to familiarize
					myself with React and Flux. The core of the app uses Redux and Express.js. The layout is powered by Twitter Bootstrap and the React
					Bootstrap library</p><p>For the conjugations, we rely heavily on this <a href="https://github.com/voldmar/conjugation">library</a> by Github
					user, voldmar (which is based on Pythoñol).
					</p>
					<p>All of the code for this app can be found on <a href="https://github.com/sdee/practicar">Github</a>
					</p>
				</Panel>
			</Accordion>
		</Panel>
	);
}

export default Readme;
