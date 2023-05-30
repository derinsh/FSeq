// TODO: Function-defining interfaces

// Functions

export function map (f: Function, coll: Array<any>, ...colls: Array<any>[]) {

    function maps (f: Function, coll: Array<any>) : Array<any> {

        var array = [];

        for (var i = 0; i < coll.length; i++) {
            array[i] = f(coll[i]);
        }
        return array;
    }

    function mapm (f: Function, coll: Array<any>, ...colls: Array<any>[]) : Array<any> {

        var array = [];
        var index = 0;

        while(true) {
            try {
                var items = [];
                items[0] = coll[index];

                for (var i = 0; i < colls.length; i++) {
                    var item = colls[i][index];
                    items[i+1] = item;
                }
                array[index] = f(
                    ...items.map(prop => prop));
                index++;
            }
            catch {
                break;
            }
        }
        return array;
    }

    if (colls.length = 0) {
        return maps(f, coll);
    }
    else {
        return mapm(f, coll, colls);
    }
}
