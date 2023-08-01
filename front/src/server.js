
import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV, SAPPER_APP_HOSTIP} = process.env;
const dev = NODE_ENV === "development";

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			session: req => ({
				env: { SAPPER_APP_HOSTIP }
			})
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
