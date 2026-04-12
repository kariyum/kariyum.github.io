export const prerender = true;
export const ssr = false;

interface RawProjectMetadata {
	title: string;
	keywords: string[];
	body: string[];
	github: string;
	tech_stack: string[];
	app_page_url: string;
}

interface RawProject extends RawProjectMetadata {
	start_date: string;
	end_date: string;
}

export interface Project extends RawProjectMetadata {
	start_date: Date;
	end_date: Date;
	to_repo: string;
}

export function load() {
	const githubs = [
		'Show me the repo!',
		'Github',
		'Source Code',
		'Github Repository',
		'Read more on Github'
	];

	// @ts-ignore
	function shuffle(array) {
		let currentIndex = array.length;

		while (currentIndex != 0) {
			let randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
		}
	}
	shuffle(githubs);

	let counter = 0;
	const github = () => {
		if (counter >= githubs.length) {
			counter = 0;
			shuffle(githubs);
		}
		const github = githubs[counter];
		counter++;
		return github;
	};
	const projects: RawProject[] = [
		{
			title: 'www.nfreelanci.tn',
			keywords: ['CRUD', 'Rust', 'Platform'],
			body: [
				'Developed full stack freelancing platform for Tunisians, featuring real time event updates, chat interface, Google SSO, CI/CD with github actions, trigrams entity search...'
			],
			github: 'https://github.com/kariyum/nfreelanci.tn.git',
			start_date: '2024-09-01',
			end_date: '2025-09-01',
			tech_stack: ['Rust', 'Sveltekit', 'Postgres', 'Nginx', 'Docker', 'TypeScript', 'HTML5'],
			app_page_url: 'nfreelanci'
		},
		{
			title: 'Ant Colony Optimization Simulation',
			keywords: [
				'Visualization',
				'Metaheuristic',
				'Optimization',
				'Search-Algorithms',
				'TSP',
				'Operations-Research'
			],
			body: [
				'Engineered an interactive visualization for Ant Colony Optimization to solve the NP-Complete TSP, featuring real-time parameter tuning and convergence analysis. Experience the live simulation <a href="/ant_colony_optimization/index.html" class="subtitle-link">here</a>.'
			],
			github: 'https://github.com/kariyum/ant_colony_optimization.git',
			start_date: '2022-06-01',
			end_date: '2022-06-30',
			tech_stack: ['JavaScript', 'HTML5 Canvas'],
			app_page_url: 'aco'
		},
		{
			title: 'Autonomous Agent Evolution Framework',
			keywords: [
				'Neural Networks',
				'Evolutionary-AI',
				'Genetic-Algorithms',
				'Simulation',
				'Operations-Research'
			],
			github: 'https://github.com/kariyum/neural_drone',
			body: [
				'Developed an evolutionary simulation environment where agents utilize feed-forward neural networks and genetic algorithms to optimize survival behaviors in dynamic spaces.'
			],
			start_date: '2022-12-01',
			end_date: '2023-01-01',
			tech_stack: ['Python', 'Pygame', 'NumPy'],
			app_page_url: 'autonomous-agent'
		},
		{
			title: 'Single Machine Scheduling Problem',
			keywords: [
				'Combinatorial-Optimization',
				'NP-Hard',
				'Benchmarking',
				'Algorithm-Analysis',
				'Operations-Research'
			],
			body: [
				'Implemented different heuristic and meta-heuristic approaches, Branch & Bound, Genetic Algorithms, and ACO, comparing efficiency on search-space exploration for NP-Hard scheduling.'
			],
			github: 'https://github.com/kariyum/single_machine_scheduling_problem',
			start_date: '2022-01-01',
			end_date: '2022-01-01',
			tech_stack: ['Python', 'Matplotlib'],
			app_page_url: 'single-machine-scheduling-problem'
		},
		{
			title: 'High-Throughput Performance Profiling',
			keywords: ['Distributed-Systems', 'Observability', 'Benchmarking', 'Real-time-Analytics'],
			body: [
				'Designed a real-time observability platform for ingesting and visualizing high-frequency metric streams to identify and resolve performance bottlenecks in a distributed architectures.'
			],
			github: 'https://github.com/kariyum/program-insights',
			start_date: '2024-04-01',
			end_date: '2024-04-01',
			tech_stack: ['SvelteKit', 'Scala', 'Akka-streams'],
			app_page_url: 'profiling-suite'
		},
		{
			title: 'Personal Finance App',
			keywords: ['Mobile-Development', 'Analytics', 'UX-Design'],
			body: [
				'A cross-platform mobile app for granular and private financial tracking, featuring meaningful aggregations and insights.'
			],
			start_date: '2023-06-01',
			github: 'https://github.com/kariyum/wallet',
			end_date: '2023-06-01',
			tech_stack: ['Flutter', 'Dart', 'SQLite'],
			app_page_url: 'personal-finance-app'
		},
		{
			title: 'Game: Reunited!',
			keywords: ['Game-Dev', 'Unity', 'C#'],
			body: [
				'Made this game back in december 2020 when covid-19 was everywhere and we had to be isolated at home. This project was the first project I have ever done. It is quite special for me because it taught me that the most important aspect about working on projects is to start prototyping asap, decompose the ideas into small components and just... do it.'
			],
			start_date: '2020-12-01',
			github: 'https://play.unity.com/en/games/67ca8ced-59e7-4d36-bc9b-9a62b0b2b88d/reunited',
			end_date: '2020-12-30',
			tech_stack: ['Unity', 'C#'],
			app_page_url: 'reunited'
		},
		{
			title: 'Maze Solver & Visualizer',
			keywords: ['Algorithms', 'Pathfinding', 'Visualization', 'BFS', 'DFS'],
			body: [
				'A tool to visualize different maze generation and solving algorithms, helping to understand how search algorithms explore spaces.'
			],
			start_date: '2021-03-01',
			github: 'https://github.com/kariyum/maze_solver',
			end_date: '2021-03-30',
			tech_stack: ['JavaScript', 'HTML5 Canvas'],
			app_page_url: 'maze'
		}
	];
	const projects_typed: Project[] = projects.map((project) => {
		return {
			...project,
			start_date: new Date(project.start_date),
			end_date: new Date(project.end_date),
			to_repo: github()
		};
	});
	return {
		projects_curiosity: projects_typed
	};
}
