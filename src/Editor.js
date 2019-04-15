import React, { Component } from 'react';

export function Editor({text,}) {
	return (
		<div className="flex flex-column mv2">
			<label htmlFor="editor" className="mv2">
				Enter your text:
			</label>
			<textarea value={text} id="editor"/>
		</div>
	);
}

