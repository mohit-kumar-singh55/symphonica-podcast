import Layout from '@/components/Layout';
import '@/styles/globals.css';

const RootLayout = ({ children }) => {
	return (
		<html lang='en'>
			<Head />

			<body>
				<Layout>
					{children}
				</Layout>
			</body>
		</html>
	)
}

export default RootLayout;

const Head = () => {
	return (
		<head>
			<title>MKS | Mohit Kumar Singh</title>
			<meta name="description" content="MKS | Mohit Kumar Singh" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</head>
	)
}