import React, { useState } from "react";
import Layout from '@theme/Layout'
import CodeBlock from '@theme/CodeBlock'
import style from './index.module.css'

let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+']

function generatePassword(length, isNum, isUpper, isLower, isSymbol) {
	let res = ''
	let chars = []
	if (isNum) {
		chars.push(...nums)
	}
	if (isUpper) {
		chars.push(...uppers)
	}
	if (isLower) {
		chars.push(...lowers)
	}
	if (isSymbol) {
		chars.push(...symbols)
	}

	if (chars.length == 0) {
		return Array.from({ length }, () => '😅')
	}

	for (; ;) {
		res = Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("")
		let flag = true
		if (isNum) {
			flag &&= res.match(/\d/)
		}
		if (isLower) {
			flag &&= res.match(/[a-z]/)
		}
		if (isUpper) {
			flag &&= res.match(/[A-Z]/)
		}
		if (isSymbol) {
			flag &&= res.match(/[~!@#$%^&*()_+]/)
		}
		if (flag) {
			return res
		}
	}
}

function GeneratePasswd() {
	const [length, setLength] = useState(8);
	const [num, setNum] = useState(true);
	const [upper, setUpper] = useState(true);
	const [lower, setLower] = useState(true);
	const [symbol, setSymbol] = useState(true);
	const [passwd, setPasswd] = useState(generatePassword(length, num, upper, lower, symbol));
	const onHandleGeneratePasswd = () => {
		setPasswd(generatePassword(length, num, upper, lower, symbol))
	}

	const handleLength = (e) => {
		setLength(e.target.value)
	}

	const handleCheckNum = (e) => {
		setNum(e.target.checked)
	}

	const handleCheckUpper = (e) => {
		setUpper(e.target.checked)
	}
	const handleCheckLower = (e) => {
		setLower(e.target.checked)
	}
	const handleCheckSymbol = (e) => {
		setSymbol(e.target.checked)
	}

	return (
		<div className={style.passwdParent}>
			<div className="col col--3">
				<div >
					<div className="margin--md">
						<label>长度: </label>
						<input type="range" min="4" max="32" value={length} onChange={handleLength} />
						<input  type="number" min="4" max="32" value={length} onChange={handleLength}/>
					</div>
				</div>
				<div className="margin--md">
					<div >
						<input type="checkbox" id="num" checked={num} onChange={handleCheckNum} />
						<label for="num">数字 0~9 </label>
					</div>
					<div>
						<input type="checkbox" id="upper" checked={upper} onChange={handleCheckUpper} />
						<label for="upper">大写字母 A~Z </label>
					</div>
					<div >
						<input type="checkbox" id="lower" checked={lower} onChange={handleCheckLower} />
						<label for="lower">小写字母 a~z </label>
					</div>
					<div>
						<input type="checkbox" id="symbol" checked={symbol} onChange={handleCheckSymbol} />
						<label for="symbol">特殊符号 ~!@#$%^&*()_+</label>
					</div>
				</div>
				<div className="margin--md">
					<div>
						<button className="button button--primary button--block button--outline" onClick={onHandleGeneratePasswd}>生成</button>
					</div>
				</div>
				<div className="margin--md">
					<CodeBlock>{passwd}</CodeBlock>
				</div>
			</div>
		</div >
	)
}

export default function Passwd() {
	return (<>
		<Layout>
			<div>
				<GeneratePasswd />
			</div>
		</Layout>
	</>
	)
}