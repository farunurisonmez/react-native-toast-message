export default interface IToast {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
}