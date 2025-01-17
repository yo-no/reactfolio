import React from "react";

function article_1() {
	return {
		date: "14 Jul 2023",
		title: "The Advantages of Next.js: Build Exceptional Web Applications Fast",
		description:
			"There's a reason everyone is so excited about Next.JS.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Spencer",
			"Spencer B",
			"Spencer Blake",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Music and AI: Revolutionizing the Creative Landscape",
		description:
			"Will AI replace our favorite rock stars?",
		style: ``,
		keywords: [
			"Music and AI: Revolutionizing the Creative Landscape",
			"Spencer",
			"Spencer B",
			"Spencer Blake",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
