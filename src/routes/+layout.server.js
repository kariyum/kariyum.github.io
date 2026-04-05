// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export const ssr = false;
// export const csr = false;
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
	const projects = [
		{
			title: 'www.nfreelanci.tn',
			keywords: ['CRUD', 'Rust', 'Platform'],
			body: [
				'Developed a full stack freelancing platform for Tunisians, featuring real time event updates, chat interface, Google SSO, CI/CD with github actions, trigrams entity search...'
			],
			github: 'https://github.com/kariyum/nfreelanci.tn.git',
			start_date: '2024-09-01',
			end_date: '2025-09-01',
			techStack: ['Rust', 'Sveltekit', 'Postgres', 'Nginx', 'Docker', 'TypeScript', 'HTML5'],
			app_page_url: 'nfreelancik'
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
			techStack: ['JavaScript', 'HTML5 Canvas'],
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
			techStack: ['Python', 'Pygame', 'NumPy'],
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
			techStack: ['Python', 'Matplotlib'],
			app_page_url: 'single-machine-scheduling-problem'
		},
		{
			title: 'High-Throughput Performance Profiling Suite',
			keywords: ['Distributed-Systems', 'Observability', 'Benchmarking', 'Real-time-Analytics'],
			body: [
				'Designed a real-time observability platform for ingesting and visualizing high-frequency metric streams to identify and resolve performance bottlenecks in distributed architectures.'
			],
			github: 'https://github.com/kariyum/program-insights',
			start_date: '2024-04-01',
			end_date: '2024-04-01',
			techStack: ['SvelteKit', 'Scala', 'Akka-streams'],
			app_page_url: 'profiling-suite'
		},
		{
			title: 'Personal Finance App',
			keywords: ['Mobile-Development', 'Analytics', 'UX-Design'],
			body: [
				'Architected a cross-platform mobile app for granular and private financial tracking, featuring meaningful aggregations and insights.'
			],
			start_date: '2023-06-01',
			github: 'https://github.com/kariyum/wallet',
			end_date: '2023-06-01',
			techStack: ['Flutter', 'Dart', 'SQLite'],
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
			techStack: ['Unity', 'C#'],
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
			techStack: ['JavaScript', 'HTML5 Canvas'],
			app_page_url: 'maze'
		},
		{
			title: 'MIPS Simulation',
			keywords: ['Computer-Architecture', 'Digital-Logic', 'Simulation', 'CPU-Design'],
			body: [
				'Implemented MIPS architecture on Digital Logic Sim from scratch. This project involved designing the datapath and control unit for a subset of MIPS instructions.'
			],
			start_date: '2021-09-01',
			end_date: '2021-12-30',
			techStack: ['Digital Logic Sim'],
			app_page_url: 'mips'
		}
	];
	const projects_typed = projects.map((project) => {
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
