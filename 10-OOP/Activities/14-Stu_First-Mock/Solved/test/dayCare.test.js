'use strict';

const DayCare = require('../dayCare');
const Child = require('../child');

describe('DayCare', () => {
  describe('Initialization', () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe('addChild', () => {
    it("should add a child to the 'children' array", () => {
      const child = new Child('Tammy', 1);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child('Tammy', 8);
      const dayCare = new DayCare();
      const mockConsoleLog = jest.spyOn(console, 'log');
      mockConsoleLog.mockImplementation(() => {});

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(0);
      expect(mockConsoleLog).toBeCalledWith(
        'Unable to add child, they are over the age limit'
      );

      mockConsoleLog.mockRestore();
    });

    it('should not add a child if already at capacity', () => {
      const dayCare = new DayCare();
      const child = new Child('Alice', 4);
      const mockConsoleLog = jest.spyOn(console, 'log');
      mockConsoleLog.mockImplementation(() => {});
      dayCare.children = [
        new Child('Tammy', 1),
        new Child('Mark', 2),
        new Child('Alvin', 1)
      ];

      dayCare.addChild(child);

      expect(dayCare.children.length).toEqual(3);
      expect(mockConsoleLog).toBeCalledWith(
        'At capacity, unable to add more children'
      );

      mockConsoleLog.mockRestore();
    });

    it('should throw an error if not provided a Child object as an argument', () => {
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );
      const callback = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      expect(callback).toThrowError(err);
    });
  });

  describe('pickupChild', () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child('Tammy', 1);
      const child2 = new Child('Mark', 2);
      const child3 = new Child('Alvin', 1);
      const mockConsoleLog = jest.spyOn(console, 'log');
      dayCare.children = [child1, child2, child3];

      mockConsoleLog.mockImplementation(() => {});
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
      expect(mockConsoleLog).toBeCalledWith(
        `Picked up ${child2.name} from day care`
      );

      mockConsoleLog.mockRestore();
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child('Tammy', 1);
      const child2 = new Child('Mark', 2);
      const child3 = new Child('Alvin', 1);
      const mockConsoleLog = jest.spyOn(console, 'log');
      dayCare.children = [child1, child2, child3];

      mockConsoleLog.mockImplementation(() => {});
      const removed = dayCare.pickupChild('Fred');

      expect(typeof removed).toEqual('undefined');
      expect(dayCare.children).toEqual([child1, child2, child3]);
      expect(mockConsoleLog).toBeCalledWith('Child not found');

      mockConsoleLog.mockRestore();
    });
  });
});
