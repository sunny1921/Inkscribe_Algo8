
const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../app'); 

chai.use(chaiHttp);
const should = chai.should();

describe('Blog Posts', () => {
    describe('/POST blog', () => {
        it('it should CREATE a new blog post', (done) => {
            let blog = {
                title: "New Blog Post",
                content: "Content of the new blog post",
            };
            
            chai.request(server)
                .post('/blog') 
                .send(blog)
                .end((err, res) => {
                    should.not.exist(err); 
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Blog Post successfully added!');
                    done();
                });
        });
    });

    describe('/GET blog', () => {
        it('it should GET all the blog posts', (done) => {
            chai.request(server)
                .get('/blog')
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    
    describe('/PUT/:id blog', () => {
        it('it should UPDATE a blog post given the id', (done) => {
            const postId = 'actualId'; 
            chai.request(server)
                .put('/blog/' + postId)
                .send({title: "Updated Blog Post", content: "Updated content of the blog post"})
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Blog Post successfully updated!');
                    done();
                });
        });
    });
    
    describe('/DELETE/:id blog', () => {
        it('it should DELETE a blog post given the id', (done) => {
            const postId = 'actualID'; 
            chai.request(server)
                .delete('/blog/' + postId)
                .end((err, res) => {
                    should.not.exist(err);
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Blog Post successfully deleted!');
                    done();
                });
        });
    });
    
});
