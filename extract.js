define({
    load: function (name, req, load, config) {
        var mod, x;

        if (name.indexOf("?") === -1) {
            load.error("No params specified");
        } else {
            x = name.slice(0, name.indexOf("?")).split(",");
            mod = name.slice(name.indexOf("?") + 1);

            req([mod], function (inc) {
                var ret = {};

                if (x.length > 1) {
                    x.forEach(function (pname) {
                        ret[pname] = inc[pname];
                    });
                } else {
                    ret = inc[x[0]];
                }

                load(ret);
            });
        }
    }
});
