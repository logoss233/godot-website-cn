import * as React from 'react';
import "./style.css"
import Footer from 'views/components/Footer';
import Header from 'views/components/Header';

export namespace Home {
	export interface Props extends React.Props < void > {
	}

	export interface State {
	}
}

export default class Home extends React.Component<Home.Props, Home.State> {
	render() {
		return (
			<div className="index-page">
				<Header></Header>
				<div id="main_image"></div>
				<section id="main_message" className="dark">
					<div className="container flex eqsize responsive">

						<div className="padded">
							<h2>这就是你想要的游戏引擎！</h2>
							<p>
								Godot引擎提供了很多通用的工具，你可以专注于做游戏，
								而不需要重复造轮子。
							</p>
							<p>
								Godot引擎遵守MIT协议，是完全免费和开源的。
								没有其他附加条款，没有版税，完全自由。
								你的游戏就是你的，直到引擎的最后一行代码。
							</p>

							<a href="/download" className="btn download">
								<div className="main">下载</div><div className="opt">3.1</div>
							</a>
							<a href="/features" className="btn flat">Learn more</a>
						</div>

						<div className="base-padding full-graphic text-right">
							<img src=" https://godotengine.org/themes/godotengine/assets/home/graphic.svg " alt=""></img>
						</div>

					</div>
				</section>

				<section id="news_and_highlights" className="container padded">
					<div className="flex eqsize responsive card">

						<a id="highlight" href="https://godotengine.org/article/vulkan-progress-report-4">
						<div className="dark base-padding">
							<h4 className="no-margin">Vulkan progress report #4</h4>
							<p className="hide-on-mobile">Over the course of September month, I continued working on Vulkan all day long, and several improvements have been made.</p>
						</div>
						</a>

						<div id="news">
							<h3 className="base-padding no-margin-bottom">news</h3>
							<hr className=""></hr>
								<a className="base-padding flex base-color-text" href="https://godotengine.org/article/dev-snapshot-godot-3-2-alpha-2">
									<strong>Dev snapshot: Godot 3.2 alpha 2</strong>
								</a>
								<hr></hr>
									<a className="base-padding flex base-color-text" href="https://godotengine.org/article/schedule-godotcon-2019-poznan">
									<strong>Schedule for GodotCon 2019 in Poznań</strong>
								</a>
								<hr></hr>
									<a className="base-padding flex base-color-text" href="https://godotengine.org/article/cfp-game-development-room-fosdem-2020">
									<strong>CFP: Game Development room at FOSDEM 2020</strong>
								</a>
								<hr></hr>
								<div className="text-center base-padding"><a href="/news" className="btn flat no-margin">more</a></div>
						</div>

					</div>
				</section>

				<section id="features" className="container padded">
					<h2 className="text-right">A different way to make games</h2>

					<div className="flex eqsize responsive features-row">
						<div className="feature">
							<img src="https://godotengine.org/themes/godotengine/assets/home/features/innovative.png" alt="" width="100%"></img>
							<div className="dark base-padding">
								<h4>Innovative Design</h4>
								<p>Big or small ideas adapt seamlessly to Godot's node-based architecture, making your life easier.</p>
							</div>
						</div>
						<div className="feature">
						<img src="https://godotengine.org/themes/godotengine/assets/home/features/3d.jpg" alt="" width="100%"></img>
						<div className="dark base-padding">
							<h4>Gorgeous 3D</h4>
							<p>Innovative 3D renderer design, which makes your art look great with minimal effort.</p>
						</div>
						</div>
					</div>

					<div className="flex eqsize responsive features-row">
						<div className="feature">
						<img src="https://godotengine.org/themes/godotengine/assets/home/features/2d.jpg" alt="" width="100%"></img>
						<div className="dark base-padding">
							<h4>Beautiful 2D</h4>
							<p>Dedicated 2D engine that works in pixel coordinates, with plenty of built-in tools.</p>
						</div>
						</div>
						<div className="feature">
							<img src="https://godotengine.org/themes/godotengine/assets/home/features/easy_code.png" alt="" width="100%"></img>
							<div className="dark base-padding">
								<h4>Easy to program</h4>
								<p>Object-oriented API with language options such as GDScript, C#, C++ and visual scripting.</p>
							</div>
						</div>
					</div>

					<div className="flex eqsize responsive features-row">
						<div className="feature">
							<img src="https://godotengine.org/themes/godotengine/assets/home/features/team_friendly.svg" alt="" width="100%"></img>
							<div className="dark base-padding">
								<h4>Team-Friendly</h4>
								<p>From architecture and tools to VCS integration, Godot is designed for everyone in your team.</p>
							</div>
							</div>
							<div className="feature">
							<img src="https://godotengine.org/themes/godotengine/assets/home/features/oss.svg" alt="" width="100%"></img>
							<div className="dark base-padding">
								<h4>Open Source</h4>
								<p>Truly open development: anyone who contributes to Godot benefits equally from others’ contributions.</p>
							</div>
						</div>
					</div>
				</section>

				<section id="get_involved" className="container padded">
					<h2>Get involved</h2>
					<p>
						Join the community and help create a game engine that belongs to everybody.
					</p>

					<div className="flex eqsize responsive">

						<div className="text-center base-padding">
							<img src="https://godotengine.org/themes/godotengine/assets/home/code.svg" alt=""></img>
							<h4>code</h4>
							<p>
								If you know how to code, and enjoy fun and challenging problems, you can help by fixing bugs or creating cool new features.
							</p>
							<a href="https://docs.godotengine.org/en/stable/community/contributing/ways_to_contribute.html#contributing-code" className="btn flat" target="_blank"> learn more </a>
						</div>

						<div className="text-center base-padding">
						<img src="https://godotengine.org/themes/godotengine/assets/home/document.svg" alt=""></img>
						<h4>document</h4>
						<p>
							Documentation quality is essential in a game engine; help make it better by updating the API reference, writing new guides or submitting corrections.
						</p>
						<a href="https://docs.godotengine.org/en/stable/community/contributing/ways_to_contribute.html#contributing-to-the-documentation" className="btn flat" target="_blank"> learn more </a>
						</div>

						<div className="text-center base-padding">
						<img src="https://godotengine.org/themes/godotengine/assets/home/report.svg" alt=""></img>
						<h4>report</h4>
						<p>
							Found a problem with the engine? Don't forget to report it so that developers can track it down.
						</p>
						<a href="https://docs.godotengine.org/en/stable/community/contributing/ways_to_contribute.html#testing-and-reporting-issues" className="btn flat" target="_blank"> learn more </a>
						</div>

					</div>
				</section>

				<section id="donations" className="padded">
					<div className="container sm-full">
						<img id="sfc_graphic" src=" https://godotengine.org/themes/godotengine/assets/home/sfc.svg " alt=""></img>
						<h3 className="text-center">donate</h3>
						<p className="small auto-margin">
						You don't need to be an engine developer to help Godot. Consider donating to speed up development and make Godot Engine even more awesome!
						</p>

						<a href="/donate" className="btn flat">Learn more</a>
					</div>
				</section>

				<section id="sponsors">
					<div className="container sm-full padded">
						<h2 className="text-center">Sponsored by</h2>

						<div className="platinum flex">
							<a className="sponsor card base-padding" href="https://enjincoin.io/" target="_blank">
								<img src="https://godotengine.org/themes/godotengine/assets/home/sponsors/enjin.png" alt=""></img>
							</a>
							<a className="sponsor card base-padding" href="https://heroiclabs.com/" target="_blank">
								<img src="https://godotengine.org/themes/godotengine/assets/home/sponsors/heroiclabs.png" alt=""></img>
							</a>
						</div>
						<div className="gold flex">
						<a className="sponsor card base-padding" href="https://www.gamblify.com/" target="_blank">
							<img src="https://godotengine.org/themes/godotengine/assets/home/sponsors/gamblify.png" alt=""></img>
						</a>
						<a className="sponsor card" href="https://www.moonwards.com/" target="_blank">
							<img src="https://godotengine.org/themes/godotengine/assets/home/sponsors/moonwards.png" alt=""></img>
						</a>
						</div>
					</div>
				</section>
				<Footer></Footer>
			</div>
		);
	}
}
