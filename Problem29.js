function getUserData(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        name: 'Test User'
      });
    }, 500);
  });
}

async function main() {
  const user = await getUserData(1);

  console.log(user);
}

main();