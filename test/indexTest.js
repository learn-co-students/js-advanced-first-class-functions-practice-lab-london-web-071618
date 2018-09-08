const expect = chai.expect;

describe('index.js', function () {
<<<<<<< HEAD
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

  afterEach(function () {
    expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(['Sally', 'Bob', 'Freddy', 'Claudia']);
  });

  describe('returnFirstTwoDrivers()', function () {
    it('should return a new array containing the first two drivers from the passed-in array', function () {
      expect(returnFirstTwoDrivers(drivers)).to.eql(['Sally', 'Bob']);
    });

    it('should be assigned to a constant', function () {
      expect(function () { returnFirstTwoDrivers = 'testing reassignment'; }).to.throw(TypeError);
    });
  });

  describe('returnLastTwoDrivers()', function () {
    it('should return an array of the last two drivers', function () {
      expect(returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])).to.eql(['Freddy', 'Claudia']);
    });

    it('should be assigned to a constant', function () {
      expect(function () { returnLastTwoDrivers = 'testing reassignment'; }).to.throw(TypeError);
    });
  });

  describe('selectingDrivers', function () {
    it('has the `returnFirstTwoDrivers` function to as its first element', function () {
      expect(selectingDrivers[0]).to.eql(returnFirstTwoDrivers);
    });

    it('has the `returnLastTwoDrivers` function to as its last element', function () {
      expect(selectingDrivers[1]).to.eql(returnLastTwoDrivers);
    });

    it('allows us to invoke either function from the array', function () {
      expect(selectingDrivers[0](drivers)).to.eql(['Sally', 'Bob']);

      expect(selectingDrivers[1](drivers)).to.eql(['Freddy', 'Claudia']);
    });
  });

  describe('createFareMultiplier()', function () {
    it('returns a function', function () {
      const fareMultiplier = createFareMultiplier(2);

      expect(fareMultiplier).to.be.a('function');
    });

    it('should multiply a given value using the created multiplier', function () {
      const fareQuintupler = createFareMultiplier(5);

      expect(fareQuintupler(5)).to.eql(25);
    });
  });

  describe('fareDoubler()', function () {
    it('is a function', function () {
      expect(fareDoubler).to.be.a('function');
    });

    it('doubles fares', function () {
      expect(fareDoubler(10)).to.eql(20);
    });
  });

  describe('fareTripler()', function () {
    it('is a function', function () {
      expect(fareTripler).to.be.a('function');
    });

    it('triples fares', function() {
      expect(fareTripler(12)).to.eql(36);
    });
  });

  describe('selectDifferentDrivers(arrayOfDrivers, function)', function () {
    it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function () {
      expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Sally', 'Bob']);
    });

    it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function () {
      expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Freddy', 'Claudia']);
=======
  const drivers = [
    { name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
    { name: 'Sally',   hometown: 'New York',    revenue: 2000 },
    { name: 'Sammy',   hometown: 'Pittsburgh',  revenue: 2500 },
    { name: 'Annette', hometown: 'Los Angeles', revenue: 6000 },
    { name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
  ];

  const driversCopy = [...drivers];

  afterEach(function () {
    expect(drivers, 'MAKE SURE YOUR ARRAY MANIPULATIONS ARE NON-DESTRUCTIVE').to.eql(driversCopy);
  });

  describe('logDriverNames()', function () {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      spy.restore();
    });

    it('logs the name of each driver', function () {
      logDriverNames(drivers);

      expect(spy.calledWithExactly('Bobby')).to.be.true;

      expect(spy.calledWithExactly('Sally')).to.be.true;

      expect(spy.calledWithExactly('Sammy')).to.be.true;

      expect(spy.calledWithExactly('Annette')).to.be.true;

      expect(spy.calledWithExactly('Bobby')).to.be.true;
    });
  });

  describe('logDriversByHometown()', function () {
    let spy;

    beforeEach(function () {
      spy = sinon.spy(console, 'log');
    });

    afterEach(function () {
      spy.restore();
    });

    it('logs the name of each driver whose hometown matches the passed-in argument', function () {
      logDriversByHometown(drivers, 'Pittsburgh');

      expect(spy.calledWithExactly('Bobby')).to.be.true;

      expect(spy.calledWithExactly('Sammy')).to.be.true;

      expect(spy.calledWithExactly('Annette')).to.not.be.true;
    });
  });
  
  describe('driversByRevenue()', function () {
    it('uses the sort() method to return a new array of drivers ordered by revenue (lowest to highest)', function () {
      expect(driversByRevenue(drivers)[0].name).to.eql('Sally');

      expect(driversByRevenue(drivers)[drivers.length - 1].name).to.eql('Annette');
    });
  });

  describe('driversByName()', function () {
    it('uses the sort() method to return a new array of drivers ordered alphabetically by name (A to Z)', function () {
      expect(driversByName(drivers)[0].name).to.eql('Annette');

      expect(driversByName(drivers)[drivers.length - 1].name).to.eql('Sammy');
    });
  });

  describe('totalRevenue()', function () {
    it('uses the reduce() method to sum the revenue of every driver and return the total', function () {
      expect(totalRevenue(drivers)).to.equal(18500);
    });
  });

  describe('averageRevenue()', function () {
    it('calculates the average revenue across all drivers', function () {
      expect(averageRevenue(drivers)).to.equal(3700);
>>>>>>> e4178a3e74e001caaf1dc26a66b9b905cb942545
    });
  });
});
