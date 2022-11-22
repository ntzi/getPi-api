import { RequestHandler, Request, Response } from 'express';
import { check } from 'express-validator';
import validate from '../middleware/validator.js';

export default class Home {
	public get createMany(): RequestHandler[] {
		return [
			check('total')
				.isNumeric()
				.isInt({ min: 1, max: 1000000 })
				.exists(),
			validate,
			async (req: Request, res: Response) => {
				const {
					query: { total },
				} = req;

				const points = [];

				for (let i = 0; i < total; i++) {
					const point = {
						x: randomNumber(0, 1),
						y: randomNumber(0, 1),
					};
					points.push(point);
				}

				return res.status(200).json(points);
			},
		];
	}

	public get test(): RequestHandler[] {
		return [
			// validate,
			async (req: Request, res: Response) => {
				console.log('HERE', req.body);
				return res.status(200).json('test');
			},
		];
	}
}

const randomNumber = (min: number, max: number): number => {
	const decimalPoints = 4;
	const difference = max - min;
	let rand = Math.random();
	rand = rand * difference;
	rand = rand + min;
	rand = Number(rand.toFixed(decimalPoints));

	return rand;
};
