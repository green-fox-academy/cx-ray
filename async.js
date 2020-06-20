Promise.all(results).then(values => setWeathers(values));

setWeathers(await Promise.all(results));
