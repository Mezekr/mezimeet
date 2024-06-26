import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
	let browser;
	let page;
	beforeAll(async () => {
		browser = await puppeteer.launch({
			args: ['--no-sandbox'],
		});
		page = await browser.newPage();
		await page.goto('http://localhost:5173/');
		await page.waitForSelector('.event');
	});

	afterAll(() => {
		browser.close();
	});

	// 1st Scenario
	test('An event element is collapsed by default', async () => {
		const eventDetails = await page.$('.event .details');
		expect(eventDetails).toBeNull();
	});

	// 2nd Scenario
	test('User can expand an event to see its details', async () => {
		await page.click('.event .showDetailsBtn');
		const eventDetails = await page.$('.event .details');
		expect(eventDetails).toBeDefined();
	});

	// 3rd Scenario
	test('User can collapse an event to hide details', async () => {
		await page.click('.event .showDetailsBtn');
		const eventDetails = await page.$('.event .details');
		expect(eventDetails).toBeNull();
	});
});
