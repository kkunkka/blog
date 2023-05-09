import React from 'react';
import Layout from '@theme/Layout'
import BackToTopButton from '@theme/BackToTopButton'
import resource from '../../../data/resource';
import Link from '@docusaurus/Link'
import style from './index.module.css'

function CategoryCard(props) {
	return <>
		<div className={style.card}>
			<Link isNavLink href={props.resource.href} style={{textDecoration:'none'}}>
				<div className="card_header">
					<h4>{props.resource.name}</h4>
				</div>
				<div className={style.cardBody} title={props.resource.describe}>{props.resource.describe}</div>
			</Link>
		</div>
	</>
}

function CategoryNav() {
	return <>
		<div className={style.sidebar}>
			<div style={{ display: 'block' }}>
				{resource.map(res => (
					<div key={res.name} >
						<a href={`#${res.name}`} className={style.sidebarItem}>{res.name}</a>
					</div>
				))}
			</div>
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
					<section style={{ display: 'flex' }} className={style.categoryCardList}>
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