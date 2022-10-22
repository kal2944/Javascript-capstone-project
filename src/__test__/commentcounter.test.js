import postcomments from './postcomments';

describe('Testing comments counter function', () => {
  test('Count comments', () => {
    const items = [{
      item_id: 'item1',
      username: 'cesar',
      comment: 'Best one',
    },
    {
      item_id: 'item2',
      username: 'kalkidan',
      comment: 'nice movie',
    },
    {
      item_id: 'item3',
      username: 'sami',
      comment: 'i like it',
    },
    ];
    const itesmLength = items.length;
    const res = postcomments(items);
    expect(res).toBe(itesmLength);
  });
});