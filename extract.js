(function () {

function descend(path, o) {
    var step = path.shift();

    while (path.length > 0) {
        return descend(path, o[step]);
    }

    return o[step];
}

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
                var path;

                if (x.length > 1) {
                    x.forEach(function (pname) {
                        path = pname.split(".");
                        ret[path[path.length - 1]] = descend(path, inc);
                    });
                } else {
                    path = x[0].split(".");
                    ret = descend(path, inc);
                }

                load(ret);
            });
        }
    }
});

}());
