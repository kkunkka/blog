import React, { useState } from "react";
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'
import style from './index.module.css'

let chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']

let book = Array(4).fill(true)


function generatePassword(length) {
	let res = ''
	for (; ;) {
		res = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
		if (res.match(/[0-9]/) && res.match(/[a-z]/) && res.match(/[A-Z]/) && res.match(/[~!@#$%^&*()_+]/)) {
			return res
		}
	}
}

function GeneratePasswd() {
	const [passwd, setPasswd] = useState('');
	const [length, setLength] = useState(8);
	const onHandleGeneratePasswd = ()=>{
		setPasswd(generatePassword(length))
	}

	return (
		<div className={style.passwdParent}>
			<div>
				<label>长度: </label>
				<input type="range" />
			</div>
			<div>
				<label>包含字符: </label>
				<input />
			</div>
			<div>
				<div>
					<input type="checkbox" id="num" checked />
					<label for="num">数字 0~9 </label>
				</div>
				<div>
					<input type="checkbox" id="upper" checked />
					<label for="upper">大写字母 A~Z </label>
				</div>
				<div>
					<input type="checkbox" id="lower" checked />
					<label for="lower">小写字母 a~z </label>
				</div>
				<div>
					<input type="checkbox" id="symbol" checked />
					<label for="symbol">特殊符号 ~!@#$%^&*()_+</label>
				</div>
			</div>
			<div>
				<button className="button button--secondary button--outline button--md" onClick={onHandleGeneratePasswd}>生成</button>
			</div>
			<div className="col col--1">
				<CodeBlock>{passwd}</CodeBlock>
			</div>
		</div>
	)
}

export default function Passwd() {
	return (<>
		<Layout>
			<div className='container margin-top--lg'>
				<div className="row">
					<GeneratePasswd />
				</div>
			</div>
		</Layout>
	</>
	)
}