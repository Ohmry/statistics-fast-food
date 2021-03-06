import Vue from 'vue'
import Vuex from 'vuex'
import { 
        AC_SAVE_MATERIAL,
        AC_UPDATE_MATERIAL,
        AC_DELETE_MATERIAL,
        AC_SAVE_FOOD,
        AC_UPDATE_FOOD,
        AC_DELETE_FOOD,
        MT_SAVE_FOOD,
        MT_UPDATE_FOOD,
        MT_DELETE_FOOD,
        MT_UPDATE_RECIPE,
        MT_UPDATE_COMPOSITION,
        MT_SAVE_MATERIAL,
        MT_UPDATE_MATERIAL,
        MT_DELETE_MATERIAL
       } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    materials: [
      { id: 1, name: 'Bruger Burn', purchaseUnit: 'Box', purchasePrice: 18000, supplyPrice: 16364, valueAddedTax: 1636, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 163.64 },
      { id: 2, name: 'Patty', purchaseUnit: 'Box', purchasePrice: 28000, supplyPrice: 25455, valueAddedTax: 2545, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 848.5 },
      { id: 3, name: 'Lettuce', purchaseUnit: 'Kg', purchasePrice: 13000, supplyPrice: 11818, valueAddedTax: 1182, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 11.818 },
      { id: 4, name: 'Tomato', purchaseUnit: 'Kg', purchasePrice: 9000, supplyPrice: 8182, valueAddedTax: 818, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 8.182 },
      { id: 5, name: 'Burger Sauce', purchaseUnit: 'Kg', purchasePrice: 10000, supplyPrice: 9091, valueAddedTax: 909, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 9.091 },
      { id: 6, name: 'Pickle', purchaseUnit: 'Kg', purchasePrice: 7000, supplyPrice: 6364, valueAddedTax: 636, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 6.364 },
      { id: 7, name: 'Wrapping Paper', purchaseUnit: 'Box', purchasePrice: 11000, supplyPrice: 10000, valueAddedTax: 1000, stockUnit: 'Each', stockConversionQuantity: 300, stockUnitPrice: 33.333 },
      { id: 8, name: 'Potato', purchaseUnit: 'Kg', purchasePrice: 8500, supplyPrice: 7727, valueAddedTax: 773, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 7.727 },
      { id: 9, name: 'French Fries Box', purchaseUnit: 'Box', purchasePrice: 15000, supplyPrice: 13636, valueAddedTax: 1364, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 136.36 },
      { id: 10, name: 'Ketchup', purchaseUnit: 'Kg', purchasePrice: 5500, supplyPrice: 5000, valueAddedTax: 500, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 5 },
      { id: 11, name: 'Coke Cup', purchaseUnit: 'Box', purchasePrice: 8000, supplyPrice: 7273, valueAddedTax: 727, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 242.433 },
      { id: 12, name: 'Straw', purchaseUnit: 'Box', purchasePrice: 3000, supplyPrice: 2727, valueAddedTax: 273, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 27.27 },
      { id: 13, name: 'Coke Syrup', purchaseUnit: 'L', purchasePrice: 10000, supplyPrice: 9091, valueAddedTax: 909, stockUnit: 'ml', stockConversionQuantity: 1000, stockUnitPrice: 9.091 },
      { id: 14, name: 'Hotdog Burn', purchaseUnit: 'Box', purchasePrice: 16000, supplyPrice: 14545, valueAddedTax: 1455, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 145.45 },
      { id: 15, name: 'Sausage', purchaseUnit: 'Kg', purchasePrice: 20000, supplyPrice: 18182, valueAddedTax: 1818, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 18.182 },
      { id: 16, name: 'Mustart Sauce', purchaseUnit: 'Kg', purchasePrice: 12000, supplyPrice: 10909, valueAddedTax: 1091, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 10.909 },
      { id: 17, name: 'Sandwich Bread', purchaseUnit: 'Box', purchasePrice: 14000, supplyPrice: 12727, valueAddedTax: 1273, stockUnit: 'Each', stockConversionQuantity: 100, stockUnitPrice: 127.27 },
      { id: 18, name: 'Slice Ham', purchaseUnit: 'Box', purchasePrice: 16000, supplyPrice: 14545, valueAddedTax: 1455, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 484.833 },
      { id: 19, name: 'Slice Cheese', purchaseUnit: 'Box', purchasePrice: 15000, supplyPrice: 13636, valueAddedTax: 1364, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 454.533 },
      { id: 20, name: 'Fried Eggs', purchaseUnit: 'Box', purchasePrice: 5000, supplyPrice: 4545, valueAddedTax: 455, stockUnit: 'Each', stockConversionQuantity: 30, stockUnitPrice: 151.5 },
      { id: 21, name: 'Mayonnaise', purchaseUnit: 'Kg', purchasePrice: 6800, supplyPrice: 6182, valueAddedTax: 618, stockUnit: 'g', stockConversionQuantity: 1000, stockUnitPrice: 6.182 }
    ],
    foods: [
      { id: 1, name: 'Burger', productType: 'Single', price: 3000 },
      { id: 2, name: 'Hotdog', productType: 'Single', price: 2500 },
      { id: 3, name: 'French Fries', productType: 'Single', price: 1500 },
      { id: 4, name: 'Sandwich', productType: 'Single', price: 2300 },
      { id: 5, name: 'Coke', productType: 'Single', price: 1800 },
      { id: 6, name: 'Burger Set', productType: 'Set', price: 6100 },
      { id: 7, name: 'Hotdog Set', productType: 'Set', price: 4100 },
      { id: 8, name: 'Sandwich Set', productType: 'Set', price: 4000 }
    ],
    compositions: [
      {
        id: 6,
        foods: [
          { id: 1, quantity: 1 },
          { id: 3, quantity: 1 },
          { id: 5, quantity: 1 }
        ]
      },
      {
        id: 7,
        foods: [
          { id: 2, quantity: 1 },
          { id: 5, quantity: 1 }
        ]
      },
      {
        id: 8,
        foods: [
          { id: 4, quantity: 1 },
          { id: 5, quantity: 1 }
        ]
      }
    ],
    recipes: [
      {
        id: 1,
        materials: [
          { id: 1, amount: 1 },
          { id: 2, amount: 1 },
          { id: 3, amount: 5 },
          { id: 4, amount: 10 },
          { id: 5, amount: 75 },
          { id: 7, amount: 1 }
        ]
      }
    ],
    transaction: []
  },
  mutations: {
    [MT_SAVE_FOOD] (state, payload) {
      let foodMaxId = Math.max.apply(Math, state.foods.map(food => food.id))
      if (foodMaxId > 0) {
        payload.id = foodMaxId + 1
      } else {
        payload.id = 1
      }
      state.foods.push({
        id: payload.id,
        name: payload.name,
        productType: payload.productType,
        price: payload.price
      })

      if (payload.productType == 'Single') {
        let recipe = payload.recipe.map(material => {
          return {
            id: material.id,
            amount: material.amount
          }
        })
        state.recipes.push({
          id: payload.id,
          materials: recipe
        })
      } else if (payload.productType == 'Set') {
        let composition = payload.composition.map(food => {
          return {
            id: food.id,
            quantity: food.quantity
          }
        })
        state.compositions.push({
          id: payload.id,
          foods: composition
        })
      }
    },
    [MT_UPDATE_FOOD] (state, payload) {
      let food = state.foods.find(food => food.id == payload.id)
      if (food == undefined) new Error('food is not found')
      food.name = payload.name
      food.productType = payload.productType
      food.price = payload.price

      if (food.productType == 'Single') {
        let recipe = state.recipes.find(recipe => recipe.id == food.id)
        recipe.materials = payload.recipe
      } else if (food.productType == 'Set') {
        let composition = state.compositions.find(composition => composition.id == food.id)
        composition.foods = payload.composition
      }
    },
    [MT_DELETE_FOOD] (state, payload) {
      let food = state.foods.find(food => food.id == payload.id)
      let recipe = state.recipes.find(recipe => recipe.id == payload.id)
      let composition = state.recipes.find(composition => composition.id == payload.id)
      state.foods.splice(food, 1)
      state.recipes.splice(recipe, 1)
      state.compositions.splice(composition, 1)
    },
    [MT_SAVE_MATERIAL] (state, payload) {
      let materialMaxId = Math.max.apply(Math, state.materials.map(material => material.id))
      if (materialMaxId > 0) {
        payload.id = materialMaxId + 1
      } else {
        payload.id = 1
      }
      state.materials.push(payload)
    },
    [MT_UPDATE_MATERIAL] (state, payload) {
      let material = state.materials.find(material => material.id == payload.id)
      if (material == undefined) new Error('material is not found')
      material.name = payload.name
      material.purchaseUnit = payload.purchaseUnit
      material.purchasePrice = payload.purchasePrice
      material.stockUnit = payload.stockUnit
      material.stockConversionQuantity = payload.stockConversionQuantity
      material.supplyPrice = payload.supplyPrice
      material.valueAddedTax = payload.valueAddedTax
      material.stockUnitPrice = payload.stockUnitPrice
    },
    [MT_DELETE_MATERIAL] (state, payload) {
      let index = state.materials.findIndex(material => material.id == payload.id)
      state.materials.splice(index, 1)
      let recipes = state.recipes.filter(recipe => {
        return recipe.materials.find(material => material.id == payload.id) != undefined
      })
      if (recipes != undefined) {
        recipes.map(recipe => {
          let materialIndex = recipe.materials.findIndex(material => material.id == payload.id)
          recipe.materials.splice(materialIndex, 1)
        })
      }
    },
    [MT_UPDATE_RECIPE] (state, payload) {
      let recipe = state.recipes.find(recipe => recipe.id == payload.id)
      if (recipe == undefined) return

      let material = recipe.materials.find(material => material.id == payload.material.id)
      if (material == undefined) return

      material.amount = Number(payload.material.amount)
    },
    [MT_UPDATE_COMPOSITION] (state, payload) {
      let composition = state.compositions.find(composition => composition.id == payload.id)
      if (composition == undefined) return

      let food = composition.foods.find(food => food.id == payload.food.id)
      if (food == undefined) return

      food.quantity = Number(payload.food.quantity)
    }
  },
  actions: {
    [AC_SAVE_FOOD] ({ commit }, payload) {
      try {
        commit(MT_SAVE_FOOD, payload)
      } catch (err) {
        console.error(err)
      }
    },
    [AC_UPDATE_FOOD] ({ commit }, payload) {
      try {
        commit(MT_UPDATE_FOOD, payload)
      } catch (err) {
        console.error(err)
      }
    },
    [AC_DELETE_FOOD] ({ commit }, payload) {
      try {
        commit(MT_DELETE_FOOD, payload)
      } catch (err) {
        console.error(err)
      }
    },
    [AC_SAVE_MATERIAL] ({ commit }, payload) {
      try {
        commit(MT_SAVE_MATERIAL, payload)
      } catch (err) {
        console.error(err)
      }
    },
    [AC_UPDATE_MATERIAL] ({ commit }, payload) {
      try {
        commit(MT_UPDATE_MATERIAL, payload)
      } catch (err) {
        console.error(err)
      }
    },
    [AC_DELETE_MATERIAL] ({ commit }, payload) {
      try {
        commit(MT_DELETE_MATERIAL, payload)
      } catch (err) {
        console.error(err)
      }
    }
  },
  modules: {
  }
})
