import semver from 'semver';

export function isVersionLower(current, latest) {
    return Boolean(semver.valid(current) && semver.valid(latest) && semver.lt(current, latest));
}

export function formatReleaseNotes(notes) {
    if (typeof notes === 'string') return notes.trim();
    if (!Array.isArray(notes)) return '';
    return notes.map(item => typeof item?.note === 'string' ? item.note.trim() : '').filter(Boolean).join('\n\n');
}
