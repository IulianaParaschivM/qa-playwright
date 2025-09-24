import { test, expect, request } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

//Create a new user flow based on the User creation requirements and verification of the non-functional requirement
test('create user', async ({  }) => {
  const apiContext = await request.newContext({
    baseURL: 'http://127.0.0.1:3003/user',
  });
  const start = Date.now();
  const newUser = await apiContext.post(`http://127.0.0.1:3003/user`, {
    data: {
      "name":"JoeJoe","username":"Joe2","email":"joe@joe.com","phone":"412-425-425"
    }
  });
  const duration = Date.now() - start;

  expect(newUser.ok()).toBeTruthy();
  expect(duration).toBeLessThan(500);    //Non-functional requirement for API request

  const users = await apiContext.get(`http://127.0.0.1:3003/user`);
  expect(users.ok()).toBeTruthy();
  expect(await users.json()).toContainEqual(expect.objectContaining({
    "name": "JoeJoe",
    "username": "Joe2",
    "email": "joe@joe.com",
    "phone": "412-425-425",
  }));
});


//Edit user data test, based on the List Users requirements
test('edit user', async ({ request }) => {
  const issues = await request.put(`http://127.0.0.1:3003/user/2`, {   
    data: {
    "name": "JoeJoeSmith",
    "username": "Joe2",
    "email": "joe@joe.com",
    "phone": "412-425-425",
    }
  }); 
    expect(issues.ok()).toBeTruthy();   
    const newIssue = await request.get(`http://127.0.0.1:3003/user/2`, { });
    expect(newIssue.ok()).toBeTruthy();  
    expect(await newIssue.json()).toEqual(expect.objectContaining( {
    "email": "joe@joe.com", "id": 2, "name": "JoeJoeSmith", "phone": "412-425-425", "username": "Joe2"}));
});



//Remove user test, based on the List Users requirements
test('remove user', async ({ request }) => {
  const newUser = await request.post(`http://127.0.0.1:3003/user`, {
    data: {
      "name":"JoeJoe","username":"Joe2","email":"joe@joe.com","phone":"412-425-425"
    }
  });
  const remUser = await request.delete(`http://127.0.0.1:3003/user/52`, { });  
  const newRemUser = await request.get(`http://127.0.0.1:3003/user/52`, { });
  expect(newRemUser.ok()).toBeFalsy();                                               
});






