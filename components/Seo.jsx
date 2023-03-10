import Head from "next/head";

const Seo = ({ pageTitle, font }) => (
	<>
		<Head>
			<title>{pageTitle && `${pageTitle} || Zohaib Dilshad - PortFolio Website`}</title>
			<meta
				httpEquiv="x-ua-compatible"
				content="ie=edge"
			/>
			<meta
				name="keywords"
				content="	cv, portfolio, react nextjs portfolio, resume"
			/>
			<meta
				name="description"
				content="Zohaib - PortFolio Website"
			/>
			<meta
				name="ibthemes"
				content="ATFN"
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>

			{font && (
				<link
					href={font}
					rel="stylesheet"
				/>
			)}
			<link
				rel="icon"
				href="favicon.ico"
			/>
		</Head>
	</>
);

export default Seo;
