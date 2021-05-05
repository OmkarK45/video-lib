import { Header, Main, Sidebar } from 'components/Layout'
export default function Layout({ children }) {
	return (
		<div className="flex h-screen overflow-hidden">
			<Sidebar />
			<div className="flex flex-col flex-1 w-0 overflow-hidden">
				<Header />
				<Main>{children}</Main>
			</div>
		</div>
	)
}
