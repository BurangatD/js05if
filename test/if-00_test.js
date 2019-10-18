const f = require('../if-00.js');

QUnit.test("ЗАДАЧА 01. f(x,y,z)=min{x+y+z, x*y*z, x*y+z}", function(assert){
	assert.deepEqual(f( 1, 1, 1), 1, "Не выполнено f( 1, 1, 1) === min {3,1,2} === 1")
	assert.deepEqual(f(-1, 0,-1),-2, "Не выполнено f(-1, 0,-1) === min {-2,0,-1} === -2")
	assert.deepEqual(f(-1,-2, 1),-2, "Не выполнено f(-1,-2, 1) === min {-2,2,3} === -2")
	assert.deepEqual(f( 0, 0, 0), 0, "Не выполнено f( 0, 0, 0) === min {0,0,0} === 0")
	assert.deepEqual(f(-1, 1, 0),-1, "Не выполнено f(-1, 1, 0) === min {0,0,-1} === -1")
	assert.deepEqual(f(-2, 0, 2), 0, "Не выполнено f(-2, 0, 2) === min {0,0,2} === 0")
});
