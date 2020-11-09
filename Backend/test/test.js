var chai = require('chai');
var chaiHttp = require('chai-http');
var should = require('chai').should();
chai.use(chaiHttp);
var assert = require('chai').assert;
var expect = chai.expect;

describe('Yelp Test Cases:', () => {
    it("Case : Get Restaurants on search", (done) => {
        chai.request('http://localhost:3001')
        .post('/UserDashboard')
        .set('Accept', 'application/json')
        .send({"itemname" : "Caesar Salad"})
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
    })


    it("Case : User login check", (done) => {
        chai.request('http://localhost:3001')
        .post('/loginUser')
        .set('Accept', 'application/json')
        .send({
            "username" : "darthvader@gmail.com",
            "password" : "123456"
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
    })

    it("Case : Owner login check", (done) => {
        chai.request('http://localhost:3001')
        .post('/loginOwner')
        .set('Accept', 'application/json')
        .send({
            "username" : "cheesecakefactory@gmail.com",
            "password" : "123456"
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
    })

    it("Case : Get Restaurant Menu for owner", (done) => {
        chai.request('http://localhost:3001')
        .post('/GetMenu')
        .set('Accept', 'application/json')
        .send({
            "restname" : "The Cheesecake Factory"
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })
    })
    it("Case : Get owner profile", (done) => {
        chai.request('http://localhost:3001')
        .post('/GetOwnerProfile')
        .set('Accept', 'application/json')
        .send({
            "email" : "test@gmail.com"
        })
        .then((res) => {
            expect(res.status).to.equal(200);
            done();
        })


})