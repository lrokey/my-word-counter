import React, { Component } from 'react';

export function ProgressBar({completion}) {
	const percantage = completion * 100;
	return (
		<div className="mv2 flex flex-column">
			<label htmlFor="progress" className="mv2">
				Progress
			</label>
			<progress value={completion} id="progress" className="bn">
				{percantage}%
			</progress>
		</div>
	);
}

