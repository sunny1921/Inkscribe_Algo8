describe('User Authentication', () => {
    describe('/POST login', () => {
        it('it should login a user with correct credentials', (done) => {
            let user = {
                username: "correctUsername",
                password: "correctPassword"
            };
            chai.request(server)
                .post('/login')
                .send(user)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token');
                    done();
                });
        });

        it('it should not login a user with incorrect credentials', (done) => {
            let user = {
                username: "wrongUsername",
                password: "wrongPassword"
            };
            chai.request(server)
                .post('/login')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(401); 
                    res.body.should.be.a('object');
                    res.body.should.have.property('error').eql('Authentication failed');
                    done();
                });
        });
    });
});
