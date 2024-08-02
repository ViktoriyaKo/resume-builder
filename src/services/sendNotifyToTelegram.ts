import axios from 'axios';

interface MessageData {
  [key: string]: string | undefined | number;
}

export const sendDataToTelegram = async (data: string) => {
  const options: RequestInit = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(data),
  };

  const res = await fetch(`/api/send-notify-to-telegram`, options);

  return res.json();
};

export const sendTelegramMessage = async (text: string): Promise<void> => {
  try {
    await axios({
      url: `${process.env.telegramBotUrl}/sendMessage`,
      params: {
        chat_id: process.env.CHANNEL_TELEGRAM_ID,
        text,
        disable_web_page_preview: true,
        parse_mode: 'html',
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const generateMessageForTelegram = (data: MessageData) => {
  const {
    contact,
    name,
    text,
    domen,
    design,
    hosting,
    pages,
    seo,
    store,
    total,
    phone
  } = data;
  const title = '&#x2757;Заявка от пользователя:';

  const objectData = [
    { string: 'имя пользователя', value: name },
    { string: 'email пользователя', value: contact },
    { string: 'номер телефонв', value: phone },
    { string: 'комментарии', value: text },
    { string: 'дизайн', value: design },
    { string: 'нужен ли домен', value: domen },
    { string: 'нужен ли хостинг', value: hosting },
    { string: 'количество страниц', value: pages },
    { string: 'SEO-оптимизация', value: seo },
    { string: 'онлайн-магазин', value: store },
    { string: 'общая стоимость, $', value: total },
  ];
  const message = objectData
    .map((data) => {
      if (data.value) {
        return `    ${data.string}: ${data.value}`;
      }
    })
    .filter(Boolean)
    .join(';\n');
  return `${title}\n${message}`;
};
