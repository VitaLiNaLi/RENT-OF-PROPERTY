const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models");
const { generateTokens } = require("../../utils/authUtils");

// Получаем данные из запроса +
// Проверяем есть ли подобный пользователь в БД +
// Хешируем пароль +
// Создаём пользователя, статус 201 +
// Клиентский редирект на /auth +
// Использовать try/catch +

router.post("/registration", async (req, res) => {
  try {
    const { name, sName, email, password, tel } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res
        .status(400)
        .json({ success: false, error: "Такой пользователь уже существует" });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      await User.create({
        name,
        sName,
        email,
        password: hashPassword,
        tel,
        isAdmin: false,
      });
      res.json({
        success: true,
        message: `Добавлен новый пользователь`,
      });
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
});

// Получить данные из запроса +
// Найти пользователя в БД по email +
// Проверить валидность пароля
// Сгенерировать пару токенов на основе объекта {user: {}}
// В ответе вернуть httpOnly куки
// Использовать try/catch

router.post("/authorization", async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({ message: "Пароли не совпадают" });
    } else {console.log(22255555222);
      const user = await User.findOne({ where: { email }, raw: true });
      const validPassword = await bcrypt.compare(password, user.password);
console.log(user);
      if (validPassword) {
        console.log(1111111111111111);
        // сгенерируем jwt токены
        const { accessToken, refreshToken } = generateTokens({
          user: { id: user.id, name: user.name, email: user.email },
        });


        // устанавливаем куки
        res.cookie("access", accessToken, {
          maxAge: 1000 * 60 * 5,
          httpOnly: true,
        });
        res.cookie("refresh", refreshToken, {
          maxAge: 1000 * 60 * 60 * 12,
          httpOnly: true,
        });

        res.json({ success: true, message: "Вы успешно авторизовались" });
      } else {
        res.json({
          message: "Ваш логин или пароль неверены",
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, message: "Неверные данные" });
  }
});

module.exports = router;

// router.post('/registration', async (req, res) => {
// try {
//     const { name, sName, email, password , tel} = req.body;

// const user = await User.findOne({
//     where: {
//         email
//     }
// })
// if(user) {
//     console.log('---------1');
//     return res.status(400).json({message: 'Пользователь с таким email уже существует'})
// }else if(!name || !sName || !email || !password || !tel) {
//     console.log('---------2');
//     return res.status(400).json({message: 'Заполните все поля'})
// }else{
//     console.log('----------3');
//  const hashPassword = await bcrypt.hash(password ,5);
//    await User.create( {
//        name,
//        sName,
//        email,
//        password: hashPassword,
//        tel,
//        isAdmin: false
//    })
//    return res.json({success: true})
//    }

// } catch (error) {
//     return res.status(500).json({success: false, message: error.message })
// }
// })
