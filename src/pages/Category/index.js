import React from 'react';
import Layout from '@theme/Layout'
import BackToTopButton from '@theme/BackToTopButton'
import resource from '../../../data/resource';
import Link from '@docusaurus/Link'
import style from './index.module.css'

function CategoryCard(props) {
	return <>
		<div className={style.card}>
			<div className="card_header">
				<h4>{props.resource.name}</h4>
			</div>
			<div className='card_body'>{props.resource.describe}</div>
		</div>
	</>
}

function CategoryNav() {
	return <>
		<div className={style.sidebar}>
			{resource.map(res => (
				<div key={res.name} className={style.sidebarItem}>
					<a href={`#${res.name}`}>{res.name}</a>
				</div>
			))}
		</div>
	</>
}

function CategoryList() {
	return <>
		<div>
			{resource.map(res => (
				<div key={res.name}>
					<div>
						<h2 id={res.name}>
							{res.name}
							<Link isNavLink href={`#${res.name}`} title={res.name}></Link>
						</h2>
					</div>
					<section style={{ display: 'flex' }}>
						{res.resources.map(r => (
							<div key={r.name} className={style.categoryCard}>
								<CategoryCard resource={r} />
							</div>
						))}
					</section>
				</div>
			))}
		</div>
	</>
}

export default function Category() {
	return <>
		<Layout>
			<div className='container margin-top--md'>
				<div className='row' >
					<aside className='col col--2'>
						<CategoryNav />
					</aside>
					<main className='col col--10'>
						<CategoryList />
						<BackToTopButton />
					</main>
				</div>
			</div>
		</Layout>
	</>
}