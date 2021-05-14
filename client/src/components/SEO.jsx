import { Helmet } from 'react-helmet-async'

export default function SEO({
	title = 'DogeFlix | The Home of Trailers',
	description = 'Watch latest trailers straight from Hollywood!',
}) {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
		</Helmet>
	)
}
